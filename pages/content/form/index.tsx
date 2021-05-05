import { DefaultBtn, Modal, MultiForm, ImagePreview } from '@components/index'
import {
  AddTagsSection,
  AddLocationSection,
  MapContainer,
  CommonLayout,
  MainHeader,
} from '@containers/index'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'
import { IContentForm, LocationType, Tag } from '@interfaces'
import { DivWithBgImg } from '@styles/common'
import { useRouter } from 'next/router'
import axios, { AxiosResponse } from 'axios'
import { FormLayout } from '@containers/Layout/PageLayout'

const ContentForm = () => {
  // ! 유저 정보 받아오기
  const router = useRouter()
  let { contentId } = router.query

  const { isLogin, accessToken, user } = useSelector(
    (state: RootReducer) => state.user
  )

  useEffect(() => {
    if (!isLogin) {
      router.push('/auth/login')
    }
  }, [])

  // ! 초기 상태
  const initialState: IContentForm = {
    title: '',
    mainImage: {
      data: null,
      url: undefined,
    },
    tags: [],
    description: '',
    location: {
      keyword: undefined,
      location: undefined,
      lat: undefined,
      lng: undefined,
    },
    images: [],
  }
  const [content, setContent] = useState<IContentForm>(initialState)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const file_url = useRef<string | ArrayBuffer | null>(null)

  //수정하고 싶어하는 사람인지 로직
  const handleModify = async (contentId: string) => {
    const res = await axios.get(
      `https://localhost:4000/content?id=${contentId}`
    )

    const { description, title, tag, mainimageUrl, images, location } = res.data
      .result as any

    if (images) {
      for (let i = 0; i < images.length; i++) {
        const { imageurl, description } = images[i]
        const blob = await fetch(imageurl).then((r) => r.blob())
        const ext = imageurl.split('.').pop()
        const filename = imageurl.split('/').pop()
        const metadata = { type: `image/${ext}` }
        const file = new File([blob], filename, metadata)

        images[i] = {
          data: file,
          name: file.name,
          url: `${imageurl}`, // 이미지파일의 임시 url은 reader의 result 속성에 담겨있습니다
          description,
          type: 'content',
        }
      }
    }
    const blob = await fetch(mainimageUrl).then((r) => r.blob())
    const ext = mainimageUrl.split('.').pop()
    const filename = mainimageUrl.split('/').pop()
    const metadata = { type: `image/${ext}` }
    const file = new File([blob], filename, metadata)

    const tags: Tag[] = tag.map((el: string) => ({ id: el, name: el }))

    setContent({
      ...content,
      title,
      mainImage: {
        data: file,
        url: `${mainimageUrl}`,
      },
      tags,
      description,
      location,
      images,
    })
  }

  useEffect(() => {
    //수정하고 싶어하는 사람인지 확인
    if (contentId) {
      handleModify(contentId as string)
    }
  }, [])

  // ! 서버에 파일 전송
  const handleSubmit = async () => {
    console.log(`상태 확인>>`, content)
    // 전송할 폼데이터를 생성합니다
    const formData = new FormData()
    const { title, description, tags, location, images, mainImage } = content
    if (!title) {
      alert('title을 입력하세요')
      return
    } else if (!description) {
      alert('사진과 장소에 대한 설명을 추가하세요')
      return
    } else if (!location) {
      alert('정확한 장소를 지도에 표시해주세요')
      return
    }
    formData.append('title', title)
    formData.append('description', description)
    formData.append('location', JSON.stringify(location))
    formData.append('tags', JSON.stringify(tags.map((obj) => obj && obj.name)))
    formData.append('mainImageData', mainImage.data || images[0].data)
    images.forEach((el) => {
      formData.append('images', el.data, el.name)
      const image_desc = {
        name: el.name,
        description: el.description,
      }
      formData.append('images', JSON.stringify(image_desc))
    })

    try {
      let res = {} as AxiosResponse
      if (!contentId) {
        res = await axios.post(`https://localhost:4000/content`, formData, {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          // withCredentials: true, // 현재 client가 http라면 주석처리
        })
      } else {
        res = await axios.put(
          `https://localhost:4000/content?contentid=${contentId}`,
          formData,
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        )
      }
      if (res.status === 201) {
        // TODO: 요청이 정상적으로 이루어지면 작성한 콘텐츠 view 페이지로 이동
        // ! 응답으로 콘텐츠 id를 받아옵니다.
        console.log(`응답>>`, res)
        const content_id = res.data.id
        router.push(`/content/[content_id]`, `/content/${content_id}`)
        // router.push(`/main`) // 임시로 main 페이지로 이동
      }
    } catch (e) {
      throw e
    }
  }

  // ! 태그 목록
  const handleTags = (tags: Tag[]) => {
    setContent({
      ...content,
      tags: [...content.tags, ...tags],
    })
  }

  // ! 위치 정보
  const setLocation = (value: LocationType) => {
    setContent({
      ...content,
      location: value,
    })
  }

  // ! input 또는 textarea 입력 및 수정
  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e
    setContent({
      ...content,
      [name]: value,
    })
  }

  // ! 이미지 설명글 입력 및 수정
  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    changeValue: any
  ) => {
    changeValue(e.target.value, e.target.id)
  }

  // ! Modal control
  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.localName === 'div' && target.className.includes('overlay')) {
      setModalIsOpen(false)
    }
  }

  // ! image form
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const files = target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.readAsDataURL(files[i])

        // reader가 file을 읽어온 다음 바디의 내용이 실행됩니다.
        reader.onloadend = () => {
          let concatName: string[] = []
          let concatFile: any[] = []
          let concatPreview: any[] = []
          concatName = [...concatName, files[i].name]
          concatFile = [
            ...concatFile,
            {
              data: files[i],
              name: files[i].name,
              url: reader.result, // 이미지파일의 임시 url은 reader의 result 속성에 담겨있습니다
              description: '',
              type: 'content',
            },
          ]
          concatPreview = [
            ...concatPreview,
            {
              name: files[i].name,
              url: reader.result, // 이미지파일의 임시 url은 reader의 result 속성에 담겨있습니다
              description: '',
            },
          ]

          setContent({
            ...content,
            images: [...content.images, ...concatFile],
          })
          file_url.current = reader.result
        }
      }
    }
  }

  // ! 이미지 하단의 input에 입력해 설명글을 추가합니다
  const addDescription = (value: string, target_idx: string) => {
    const editedImages = [...content.images]
    editedImages[Number(target_idx)].description = value
    setContent({
      ...content,
      images: editedImages,
    })
  }

  // ! 이미지 미리보기를 클릭해 배너 이미지 교체
  const selectBannerImg = (url: string, data: Blob) => {
    setContent({
      ...content,
      mainImage: { data, url },
    })
  }

  let userId
  if (user) {
    userId = user.id
  }

  return (
    <CommonLayout
      header={<MainHeader isLogin={isLogin} userId={userId as string} />}>
      <FormLayout>
        <main>
          <section className='banner'>
            <DivWithBgImg
              bgUrl={
                content.mainImage.url ||
                (content.images[0] && content.images[0].url)
              }
              p={'24px'}>
              <input
                name='title'
                type='text'
                placeholder='Content Title Here'
                value={content.title}
                onChange={inputChangeHandler}
                autoFocus
              />
            </DivWithBgImg>
          </section>

          <section>
            <textarea
              name='description'
              value={content.description}
              onChange={inputChangeHandler}
              placeholder='추천글을 작성해주세요'></textarea>
          </section>

          <section>
            <AddTagsSection
              locationTag={content.location.keyword}
              tagList={content.tags}
              setTagList={handleTags}
            />
          </section>

          <section>
            <AddLocationSection
              location={content.location}
              onClick={handleModalOpen}
            />
            {modalIsOpen && (
              <Modal w='800px' h='800px' handleModalClose={handleModalClose}>
                <MapContainer
                  locationInfo={content.location}
                  tags={content.tags}
                  handleLocation={setLocation}
                  setLocationTag={handleTags}
                  handleModalClose={() => setModalIsOpen(false)}
                />
              </Modal>
            )}
          </section>

          <section className='form'>
            <div>
              {content.images.map(
                ({ url, data, name, description }: any, idx: number) => (
                  <ImagePreview>
                    <img
                      src={url}
                      key={name}
                      alt='preview'
                      title='클릭해서 배너이미지로 지정할 수 있습니다'
                      onClick={() => selectBannerImg(url, data)}
                    />
                    <input
                      id={'' + idx}
                      key={idx}
                      type='text'
                      value={description}
                      onChange={(e) => onChange(e, addDescription)}
                      placeholder={description || '설명을 추가해주세요'}
                    />
                  </ImagePreview>
                )
              )}
              <MultiForm
                method='post'
                encType='multipart/form-data'
                handleFile={handleFile}
              />
            </div>
          </section>

          <section className='buttons'>
            <DefaultBtn onClick={handleSubmit}>등록하기</DefaultBtn>
          </section>
        </main>
      </FormLayout>
    </CommonLayout>
  )
}

export default ContentForm
