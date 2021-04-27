import React, { useState } from 'react'
import {
  PhotoCardInputContainer,
  ImageInputbtn,
} from '../styles/photocard-input'
import LocationInfo from './LocationInfo'
import { Button } from '../styles/common'

interface props {
  location?: string
}

const PhotoCardInput = ({ location = '서울식물원' }: props) => {
  const [message, setMessage] = useState<string>('')
  const [fileSelected, setFileSelected] = useState<File>()
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value)
  }

  const handlefileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files

    if (!fileList) return

    setFileSelected(fileList[0])
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    //사진 업로드 과정
    if (fileSelected) {
      const formData = new FormData()
      formData.set('image', fileSelected, fileSelected.name)

      //to-do 여기에 서버 통신을 보내면 됨 formData에 Blob이 담겨있음
    }
  }
  const ImgBtn = '/src/iconmonstr-picture-2.svg'
  return (
    <PhotoCardInputContainer>
      <ImageInputbtn id='fileinput' type='file' onChange={handlefileChange} />
      <label className='photocardinputbtn' htmlFor='fileinput'>
        <img
          alt='imageinputbtn'
          width={24}
          height={24}
          src={`${fileSelected ? URL.createObjectURL(fileSelected) : ImgBtn}`}
        />
      </label>
      <div className='titlecontainer'>
        <label htmlFor='messagebox'>사진 이야기</label>
        <LocationInfo location={location} />
      </div>
      <textarea
        onChange={handleChange}
        name='messagebox'
        value={message}
        id='messagebox'
      />
      <div>
        <Button w={100} h={50} onClick={handleClick}>
          등록하기
        </Button>
      </div>
    </PhotoCardInputContainer>
  )
}

export default PhotoCardInput
