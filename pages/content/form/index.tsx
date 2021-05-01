import { DefaultBtn, Modal } from '@components/index'
import {
  AddTagsSection,
  AddLocationSection,
  MapContainer,
} from '@containers/index'
import React, { ChangeEvent, useRef, useState } from 'react'
import { FormLayout } from './form.style'
import { useDispatch } from 'react-redux'
import { uploadContent } from '@actions/content'

interface ITag {
  id: string
  name: string
}

// TODO: store에서 user정보(userId)를 받아와야 합니다.
const ContentForm = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [tags, setTags] = useState<(null | ITag)[]>([])
  const [state, setState] = useState<any>({
    fileName: [],
    images: [],
    preview: [],
  })
  const file_url = useRef<string | ArrayBuffer | null>(null)
  const dispatch = useDispatch()

  // 서버에 파일 전송
  const handleSubmit = async () => {
    // 보낼 데이터를 만듭니다
    const data = {
      images: state.images,
      title,
      mainImageData: state.images[0].data,
      description,
      tags: tags.map((obj) => obj && obj.name),
      location,
    }
    // json 형태로 전송합니다
    const jsonData = JSON.stringify(data)
    // 폼데이터를 생성합니다
    const formData = new FormData()
    // jsonData를 `data`라는 키의 값으로 formData에 append 합니다
    formData.append('data', jsonData)

    dispatch(uploadContent(jsonData))
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
          setState({
            fileName: [...state.fileName, ...concatName],
            images: [...state.images, ...concatFile],
            preview: [...state.preview, ...concatPreview],
          })
          file_url.current = reader.result
          console.log(`state>>`, state)
        }
      }
    }
  }

  // ! 이미지를 클릭해 설명글을 추가합니다
  const addDescription = (value: string, target_idx: string) => {
    const { images, preview } = state
    const editedImages = [...images]
    const editedPreview = [...preview]
    editedImages[Number(target_idx)].description = value
    editedPreview[Number(target_idx)].description = value
    setState({ ...state, images: editedImages })
  }

  return (
    <FormLayout>
      <main>
        <section className='banner'>
          <input
            type='text'
            placeholder='Content Title Here'
            value={title}
            onChange={(e) => onChange(e, setTitle)}
            autoFocus
          />
        </section>

        <section>
          <textarea
            value={description}
            onChange={(e) => onChange(e, setDescription)}
            placeholder='추천글을 작성해주세요'></textarea>
        </section>

        <section>
          <AddTagsSection tagList={tags} setTagList={setTags} />
        </section>

        <section>
          <AddLocationSection location={location} onClick={handleModalOpen} />
          {modalIsOpen && (
            <Modal handleModalClose={handleModalClose}>
              <MapContainer
                setLocation={setLocation}
                handleModalClose={() => setModalIsOpen(false)}
              />
            </Modal>
          )}
        </section>

        <section>
          <form method='post' encType='multipart/form-data'>
            <input type='file' accept='image/*' onChange={handleFile} />
          </form>
          <div className='preview'>
            {state.preview.map(
              ({ url, name, description }: any, idx: number) => (
                <div>
                  <img
                    src={url}
                    key={name}
                    alt='preview'
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'contain',
                    }}
                  />
                  <input
                    id={'' + idx}
                    key={idx}
                    type='text'
                    value={description}
                    onChange={(e) => onChange(e, addDescription)}
                    placeholder={description || '설명을 추가해주세요'}
                  />
                </div>
              )
            )}
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
