import { DefaultBtn, Modal, MultiForm, ImagePreview } from '@components/index'
import {
  AddTagsSection,
  AddLocationSection,
  MapContainer,
} from '@containers/index'
import React, { ChangeEvent, useRef, useState } from 'react'
import { FormLayout } from './form.style'
import { useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'
import { IContentForm, Tag } from '@interfaces'
import axios from 'axios'
import useAction from '@hooks/useAction'
import { getUserInfo } from '@actions/users'
import { DivWithBgImg } from '@styles/common'
import { useRouter } from 'next/router'

const ContentForm = () => {
  // ! 유저 정보 받아오기
  const _getUserInfo = useAction(getUserInfo)
  const { isLogin, accessToken } = useSelector(
    (state: RootReducer) => state.user
  )
  // 로컬 스토리지에 저장된 accessToken을 가져와서 다시 세팅해줌
  // useEffect(() => {
  //   // TODO : load main data
  //   _getUserInfo(accessToken)
  // }, [])

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
      location: undefined,
      lat: undefined,
      lng: undefined,
    },
    images: [],
  }
  const [content, setContent] = useState<IContentForm>(initialState)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const file_url = useRef<string | ArrayBuffer | null>(null)
  const router = useRouter()

  const handleTags = (tags: Tag[]) => {
    setContent({
      ...content,
      tags: [...content.tags, ...tags],
    })
  }

  const setLocationInfo = (name: string, value: string | number) => {
    setContent({
      ...content,
      location: {
        ...content.location,
        [name]: value,
      },
    })
  }

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

  // ! 서버에 파일 전송
  const handleSubmit = async () => {
    // 전송할 폼데이터를 생성합니다
    const formData = new FormData()
    const { title, description, tags, location, images, mainImage } = content

    formData.append('title', title)
    formData.append('description', description)
    formData.append('location', JSON.stringify(location))
    formData.append('tags', JSON.stringify(tags))
    formData.append('mainImageData', mainImage.data || images[0].data)
    formData.append('type', 'content')
    images.forEach((el) => {
      formData.append('images', el.data, el.name)
      const image_desc = {
        name: el.name,
        description: el.description,
      }
      formData.append('images', JSON.stringify(image_desc))
    })

    try {
      const res = await axios.post(`https://localhost:4000/content`, formData, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        // withCredentials: true, // 현재 client가 http라면 주석처리
      })
      console.log(`응답>>`, res)
      if (res.status === 201) {
        // TODO: 요청이 정상적으로 이루어지면 작성한 콘텐츠 view 페이지로 이동
        // ! 응답으로 콘텐츠 id를 받아옵니다.
        // router.push(`/content/view/${content_id}`)
      }
    } catch (e) {
      throw e
    }
  }

  // ! input, textarea handler
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

  return (
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
          <AddTagsSection tagList={content.tags} setTagList={handleTags} />
        </section>

        <section>
          <AddLocationSection
            location={content.location}
            onClick={handleModalOpen}
          />
          {modalIsOpen && (
            <Modal handleModalClose={handleModalClose}>
              <MapContainer
                setLocation={setLocationInfo}
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
  )
}

export default ContentForm
