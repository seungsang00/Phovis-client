import { DefaultBtn, Modal, MultiForm, ImagePreview } from '@components/index'
import {
  AddTagsSection,
  AddLocationSection,
  MapContainer,
} from '@containers/index'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FormLayout } from './form.style'
import { useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'
import { useDispatch } from 'react-redux'
// const LOCAL_KEY_ACCESS_TOKEN = 'LOCAL_ACCESS_TOKEN'

// import { uploadContent } from '@actions/contentForm'
import { IContentForm, Tag } from '@interfaces'
import axios from 'axios'
import useAction from '@hooks/useAction'
import { getUserInfo } from '@actions/users'
import { DivWithBgImg } from '@styles/common'

const ContentForm = () => {
  const initialState: IContentForm = {
    title: '',
    mainimageData: null,
    tags: [],
    description: '',
    location: {
      location: undefined,
      lat: undefined,
      lng: undefined,
    },
    form: {
      images: [],
      preview: [],
    },
  }
  const [content, setContent] = useState<IContentForm>(initialState)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const file_url = useRef<string | ArrayBuffer | null>(null)
  // const { accessToken } = useSelector((state: RootReducer) => state.user)
  const userInfo = useSelector((state: RootReducer) => state.user)
  const dispatch = useDispatch()

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
  const handleSubmit = async (stateAccessToken?: String) => {
    // 보낼 데이터를 만듭니다
    const { title, form, description, tags, location } = content
    const data = {
      images: form.images,
      title: title,
      mainImageData: form.images[0].data,
      description: description,
      tags: tags.map((obj) => obj && obj.name),
      location: location,
    }
    // json 형태로 전송합니다
    const jsonData = JSON.stringify(data)
    // 폼데이터를 생성합니다
    const formData = new FormData()
    // jsonData를 `data`라는 키의 값으로 formData에 append 합니다
    formData.append('data', jsonData)

    // dispatch(uploadContent(jsonData))

    try {
      console.log(`user info>>`, userInfo)
      // const LOCAL_KEY_ACCESS_TOKEN = 'LOCAL_ACCESS_TOKEN'
      // 만약 입력받은 토큰이 없다면 localStorage 에서 토큰이 있는지 확인한다.
      // let accessToken =
      //   stateAccessToken || localStorage.getItem(LOCAL_KEY_ACCESS_TOKEN)
      // if (!accessToken) {
      //   return dispatch(errorGetUserInfo('fail get user info'))
      // }
      const res = await axios.post(`https://localhost:4000/content`, jsonData, {
        headers: {
          authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVkOGRkYWQwLTY0MWQtNDgxYS05YzYyLTYyNTM4ZTFlZGEzNSIsImlhdCI6MTYxOTg4MDU3MiwiZXhwIjoxNjE5ODg0MTcyfQ.RRVQeVDDh7Y2P3l9F5LQQy2ah-k4XSSbpJewVNmdlJ8`,
        },
        // withCredentials: true,
      })
      console.log(`응답>>`, res)
    } catch (e) {
      throw e
    }

    // TODO: 요청이 정상적으로 이루어지면 작성한 콘텐츠 페이지로 redirect
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
            form: {
              ...content.form,
              images: [...content.form.images, ...concatFile],
              preview: [...content.form.preview, ...concatPreview],
            },
          })
          file_url.current = reader.result
        }
      }
    }
  }

  // ! 이미지를 클릭해 설명글을 추가합니다
  const addDescription = (value: string, target_idx: string) => {
    const { images, preview } = content.form
    const editedImages = [...images]
    const editedPreview = [...preview]
    editedImages[Number(target_idx)].description = value
    editedPreview[Number(target_idx)].description = value
    setContent({
      ...content,
      form: {
        ...content.form,
        images: editedImages,
        preview: editedPreview,
      },
    })
  }

  return (
    <FormLayout>
      <main>
        <section className='banner'>
          <DivWithBgImg
            bgUrl={content.form.preview[0] && content.form.preview[0].url}
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
            {content.form.preview.map(
              ({ url, name, description }: any, idx: number) => (
                <ImagePreview>
                  <img src={url} key={name} alt='preview' />
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
