import React, { useState, useEffect } from 'react'
import { PhotoCardInputContainer, ImageInputbtn } from './photocard-input'
import LocationInfo from '../../components/LocationInfo/LocationInfo'
import { Button } from '@styles/index'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'
import { IPhotoCard, LocationType } from '@interfaces'

interface props {
  contentId: string
  handleModalClose: () => void
  location: LocationType
  isModify?: boolean
  photocardId: string
}

const PhotoCardInput = ({
  isModify,
  location,
  contentId,
  photocardId,
  handleModalClose,
}: props) => {
  const [message, setMessage] = useState<string>('')
  const [fileSelected, setFileSelected] = useState<File>()
  const { accessToken } = useSelector((state: RootReducer) => state.user)

  const getPhotocardData = async () => {
    const result = await axios.get<IPhotoCard>(
      `https://localhost:4000/photocard?photocardId=${photocardId}`
    )

    const { description: message, imageurl } = result as any
    const blob = await fetch(imageurl).then((r) => r.blob())
    const ext = imageurl.split('.').pop()
    const filename = imageurl.split('/').pop()
    const metadata = { type: `image/${ext}` }
    const file = new File([blob], filename, metadata)

    setMessage(message)
    setFileSelected(file)
  }

  useEffect(() => {
    console.log('token', accessToken)
    if (isModify) {
      getPhotocardData()
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value)
  }

  const handlefileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files

    if (!fileList) return

    setFileSelected(fileList[0])
  }

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    e.preventDefault()
    //사진 업로드 과정
    if (fileSelected) {
      const description = {
        name: fileSelected.name,
        description: message,
      }
      const formData = new FormData()

      formData.append('image', fileSelected, fileSelected.name)
      formData.append('image', JSON.stringify(description))
      //to-do 여기에 서버 통신을 보내면 됨 formData에 Blob이 담겨있음

      const res = await axios.post(
        'https://localhost:4000/photocard',
        formData,
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
          params: {
            contentId,
          },
        }
      )

      if (res.status === 201) {
        handleModalClose()
      }
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
        <LocationInfo locationInfo={location} />
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
