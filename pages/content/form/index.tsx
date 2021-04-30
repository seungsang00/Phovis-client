import { DefaultBtn, Modal } from '@components/index'
import {
  AddTagsSection,
  AddLocationSection,
  MultiForm,
  MapContainer,
  PreviewEntity,
} from '@containers/index'
import React, { useRef, useState } from 'react'
import { FormLayout } from './form.style'

interface ITag {
  id: string
  name: string
}

interface IImages {
  url?: string
  description?: string
  type?: string
}

// TODO: store에서 user정보(userId)를 받아와야 합니다.
const ContentForm = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [tags, setTags] = useState<(null | ITag)[]>([])
  const [images, setImages] = useState<IImages[]>([])
  const [form, setForm] = useState({})
  const file_url = useRef<string | undefined>(undefined)
  const [currentFile, setCurrentFile] = useState<object | undefined>(undefined)

  const handleSubmit = (_e: any) => {
    const content = {
      title,
      mainimage: images[0],
      description,
      tags: tags.map((obj) => obj && obj.name),
      location,
      images,
    }
    console.log(content)
  }
  /** POST /content:userid
  {
    "title": "제목",
    "mainimageUrl" : "chang.png",
    "tags" : ["창덕궁", "야경"],
    "description" : "창덕궁은 오래된 전통...",
    "location" : {
        "location" : "서울시 ...",
        "lat": "28.1234",
        "lng": "124.12345"
    },
    "images" : [
        {
            "url": "",
            "description" : "여름에 다녀옴",
            "type":"content"
        },{
            "url": "",
            "description" : "야경 맛집",
            "type":"content" 
        }
    ]
  }
   */
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    callback: any
  ) => {
    callback(e.target.value)
  }

  // Modal control
  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.localName === 'div' && target.className.includes('overlay')) {
      setModalIsOpen(false)
    }
  }

  // Upload & submit image and image_description
  const handleImgSubmit = (description: string, cb: any) => {
    const imageData = {
      file: currentFile,
      url: file_url.current,
      description,
      type: 'content',
    }
    setImages([...images, imageData])
    console.log(`imageData>>`, imageData)
    setCurrentFile(undefined)
    cb('')
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    if (target.files) {
      const file = target.files[0]
      console.log(`file>>`, file)
      setCurrentFile(file)

      const fileURL = URL.createObjectURL(file)
      console.log(`URL>>>`, fileURL)
      setForm({ url: fileURL })
      file_url.current = fileURL
    }
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
          {images.length !== 0 && (
            <div className='preview'>
              {images.map((image) => (
                <PreviewEntity
                  url={image.url}
                  description={image.description}
                />
              ))}
            </div>
          )}
          <MultiForm
            handleUpload={handleUpload}
            onClick={handleImgSubmit}
            onChange={onChange}
            file_url={file_url.current}
            currentFile={currentFile}
          />
        </section>

        <section className='buttons'>
          {/* <DefaultBtn onClick={() => console.log(`임시저장`)}>
            임시저장
          </DefaultBtn> */}
          <DefaultBtn onClick={handleSubmit}>등록하기</DefaultBtn>
        </section>
      </main>
    </FormLayout>
  )
}

export default ContentForm
