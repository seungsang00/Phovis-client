import React, { useState, useEffect } from 'react'
import { PhotoCardInputContainer, ImageInputContainer } from './photocard-input'
import LocationInfo from '../../components/LocationInfo/LocationInfo'
import { Button } from '@styles/index'
import axios, { AxiosResponse } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '@actions/reducer'
import { IPhotoCard, LocationType } from '@interfaces'
import { useRouter } from 'next/router'
import {
  addRelatedPhotocardList,
  getRelatedPhotocardList,
} from '@actions/content'
import useAction from '@hooks/useAction'

interface props {
  contentId?: string
  handleModalClose: (e: boolean) => void
  location?: LocationType
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
  const router = useRouter()
  const dispatch = useDispatch()
  const [message, setMessage] = useState<string>('')
  const [fileSelected, setFileSelected] = useState<File>()
  const { accessToken } = useSelector((state: RootReducer) => state.user)
  const _getRelatedPhotoCardList = useAction(getRelatedPhotocardList)

  const getPhotocardData = async () => {
    const result = await axios.get<IPhotoCard>(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/photocard?photocardId=${photocardId}`,
      { headers: { aouthorization: `bearer ${accessToken}` } }
    )

    const { description: message, imageurl } = result.data as any
    const blob = await fetch(imageurl).then((r) => r.blob())
    const ext = imageurl.split('.').pop()
    const filename = imageurl.split('/').pop()
    const metadata = { type: `image/${ext}` }
    const file = new File([blob], filename, metadata)

    setMessage(message)
    setFileSelected(file)
  }

  useEffect(() => {
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
      let res = {} as AxiosResponse
      if (isModify) {
        res = await axios.put(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/photocard`,
          formData,
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
            params: {
              contentId,
              photocardId,
            },
          }
        )
      } else {
        res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/photocard`,
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
      }
      if (res.status === 200 || res.status === 201) {
        dispatch(addRelatedPhotocardList(res.data))
        _getRelatedPhotoCardList(contentId as string)
        handleModalClose(false)
        router.push(`/content/[content_id]`, `/content/${contentId}`)
      }
    }
  }
  return (
    <PhotoCardInputContainer>
      <ImageInputContainer>
        <input
          id='fileinput'
          type='file'
          accept='image/*'
          onChange={handlefileChange}
        />
        <label htmlFor='fileinput'>
          <img
            src={`${
              fileSelected
                ? URL.createObjectURL(fileSelected)
                : 'https://www.femtoscientific.com/wp-content/uploads/2014/12/default_image_01.png'
            } `}
          />
        </label>
      </ImageInputContainer>
      {/* <ImageInputbtn id='fileinput' type='file' onChange={handlefileChange} />
      <label className='photocardinputbtn' htmlFor='fileinput'>
        <img
          alt='imageinputbtn'
          width={24}
          height={24}
          src={`${fileSelected ? URL.createObjectURL(fileSelected) : ImgBtn}`}
        />
      </label> */}
      <div className='titlecontainer'>
        {/* <label htmlFor='messagebox'>사진 이야기</label> */}
        <LocationInfo locationInfo={location as LocationType} />
      </div>
      <textarea
        onChange={handleChange}
        name='messagebox'
        value={message}
        id='messagebox'
        autoFocus
      />
      <Button w={'100%'} h={'2.3rem'} onClick={handleClick}>
        등록하기
      </Button>
      <div></div>
    </PhotoCardInputContainer>
  )
}

export default PhotoCardInput
