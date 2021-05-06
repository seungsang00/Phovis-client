import React, { useEffect, useState } from 'react'
import { KakaoMapContainer, SearchInput, SubmitButton } from '@components/index'
import { LocationType, Tag } from '@interfaces'
import { Wrapper } from './map.style'

interface IProps {
  locationInfo: LocationType
  tags: Tag[]
  prekeyword: string | undefined
  handleLocation: (value: LocationType) => void
  setLocationTag: (tag: Tag[]) => void
  handleModalClose: () => void
}

const MapContainer = ({
  locationInfo,
  prekeyword,
  handleLocation,
  handleModalClose,
  setLocationTag,
}: IProps) => {
  const { location } = locationInfo
  const [myLocation, setMyLocation] = useState<string>(location || '')
  const [keyword, setKeyword] = useState<string>(prekeyword || '')
  const [coord, setCoord] = useState({ lat: undefined, lng: undefined })

  useEffect(() => {
    // script 심어주기
    const script = document.createElement('script')
    script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&libraries=services`
    document.head.appendChild(script)

    // 지도 불러오면 실행
    script.onload = () => {
      const { kakao }: any = window

      // 지도를 표시할 div
      const container = document.getElementById('map')
      const options = {
        center: new kakao.maps.LatLng(37.24093737215525, 131.86746141852916), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      }

      // 지도를 생성
      const map = new kakao.maps.Map(container, options)
      map.setDraggable(false) // 지도 이동 막기

      // 장소 검색 객체 생성
      const ps = new kakao.maps.services.Places()

      // 키워드 검색 완료시 호출되는 콜백함수
      const placesSearchCB = (data: any, status: any, _pagination: any) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds()
          const position = map.getCenter()
          console.log(`키워드 검색>>`, position)
          for (let i = 0; i < data.length; i++) {
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
          }

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정
          map.setBounds(bounds)
        }
      }

      // 키워드로 장소를 검색
      ps.keywordSearch(keyword, placesSearchCB)

      // TODO: 좌표로 주소를 얻어내기

      // 주소-좌표 변환 객체를 생성
      const geocoder = new kakao.maps.services.Geocoder()

      const marker = new kakao.maps.Marker() // 클릭한 위치를 표시할 마커입니다

      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 }) // 마커를 클릭하면 장소명을 표출할 인포윈도우

      function searchAddrFromCoords(coords: any, callback: any) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback)
      }

      function searchDetailAddrFromCoords(coords: any, callback: any) {
        // 좌표로 법정동 상세 주소 정보를 요청합니다
        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback)
      }

      // 지도 밖에 있는 `#location_info`에 지도 중심좌표에 대한 주소정보를 표출하는 함수
      function displayCenterInfo(result: any, status: string) {
        if (status === kakao.maps.services.Status.OK) {
          const infoDiv = document.getElementById('location_info')

          for (let i = 0; i < result.length; i++) {
            // 행정동의 region_type 값은 'H' 이므로
            if (result[i].region_type === 'H' && infoDiv) {
              infoDiv.innerHTML = result[i].address_name
              break
            }
          }
        }
      }

      // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
        searchDetailAddrFromCoords(
          mouseEvent.latLng,
          function (result: any[], status: string) {
            if (status === kakao.maps.services.Status.OK) {
              let location_name: string = result[0].address.address_name

              if (location_name) {
                setMyLocation(location_name)
              }

              // const detailAddr = '<div>지번 주소 : ' + location_name + '</div>'

              const content =
                '<div class="bAddr">' +
                '<span class="title map-tooltip">내가 추천하는 장소는 여기!</span>' +
                // detailAddr +
                '</div>'

              // 마커를 클릭한 위치에 표시합니다
              marker.setPosition(mouseEvent.latLng)
              marker.setMap(map)

              // 마커를 클릭한 위치의 위도, 경도 정보를 state에 저장합니다
              setCoord({ lat: mouseEvent.latLng.Ma, lng: mouseEvent.latLng.La })

              // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
              infowindow.setContent(content)
              infowindow.open(map, marker)
            }
          }
        )
      })

      // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, 'idle', function () {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo)
      })

      // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시
      searchAddrFromCoords(map.getCenter(), displayCenterInfo)
    }
  }, [keyword])

  const handleSubmit = () => {
    if (myLocation) {
      if (keyword) {
        setLocationTag([{ id: keyword, name: keyword }])
      }
      handleLocation({
        keyword: keyword,
        location: myLocation,
        lat: coord.lat,
        lng: coord.lng,
      })
      handleModalClose()
    }
  }

  return (
    <Wrapper>
      <SearchInput value={keyword} onSubmit={setKeyword} />
      <KakaoMapContainer />
      <div className='location-info'>
        <p className='map-info'>
          <span id='location_info'></span>
        </p>
        <p className='main-info'>
          나의 추천장소 👉{'  '}
          <span id='my_location'>
            {myLocation || '지도에 좌표를 콕! 찍어주세요'}
          </span>
        </p>
      </div>
      <SubmitButton onSubmit={handleSubmit} />
    </Wrapper>
  )
}

export default MapContainer
