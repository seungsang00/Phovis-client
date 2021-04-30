import React, { useEffect, useState } from 'react'
import { KakaoMapContainer, SearchInput, SubmitButton } from '@components/index'

interface IProps {
  location?: string
  setLocation: (location: string) => void
  handleModalClose: () => void
}

const MapContainer = ({ location, setLocation, handleModalClose }: IProps) => {
  const [keyword, setKeyword] = useState<string>(location || '')

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
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      }

      // 지도를 생성
      const map = new kakao.maps.Map(container, options)

      // 장소 검색 객체 생성
      const ps = new kakao.maps.services.Places()

      // 키워드 검색 완료시 호출되는 콜백함수
      const placesSearchCB = (data: any, status: any, _pagination: any) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds()

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

              const myLocation = document.querySelector('#my_location')
              if (myLocation) {
                myLocation.textContent = location_name
              }

              const detailAddr = '<div>지번 주소 : ' + location_name + '</div>'

              const content =
                '<div class="bAddr">' +
                '<span class="title">내가 추천하는 장소는 여기!</span>' +
                detailAddr +
                '</div>'

              // 마커를 클릭한 위치에 표시합니다
              marker.setPosition(mouseEvent.latLng)
              marker.setMap(map)

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
    const myLocation = document.querySelector('#my_location')?.textContent
    if (myLocation) {
      console.log(myLocation)
      setLocation(myLocation)
      handleModalClose()
    }
  }

  return (
    <>
      <SearchInput value={keyword} onSubmit={setKeyword} />
      <KakaoMapContainer />
      <h3>
        여기를 보고 있어요 🔍 <span id='location_info'></span>
      </h3>
      <h3>
        나의 추천장소 👉 <span id='my_location'></span>
      </h3>
      <SubmitButton onSubmit={handleSubmit} />
    </>
  )
}

export default MapContainer
