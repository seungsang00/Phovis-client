import { DefaultBtn } from '@components/index'
import { useState } from 'react'
import { FormContainer, ImageForm, PreviewContainer } from './imageform.style'

interface IForm {
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>, callback: any) => void
  onClick: (...args: any) => void
  file_url: string | ArrayBuffer | null
  currentFile: object | undefined
}

export const MultiForm = ({
  handleFile,
  onChange,
  onClick,
  file_url,
  currentFile,
}: IForm) => {
  const [description, setDescription] = useState('')

  return (
    <FormContainer>
      <ImageForm name='image' method='post' encType='multipart/form-data'>
        <input
          id='input-file'
          type='file'
          accept='image/*'
          onChange={handleFile}
        />
        <label className='input-file-area' htmlFor='input-file'>
          {currentFile ? (
            <img src={file_url} alt='selected' />
          ) : (
            <div>
              🖼<span>사진을 등록해주세요</span>
            </div>
          )}
        </label>
        <input
          id='imageDescript'
          type='text'
          value={description}
          placeholder='사진 설명을 작성해주세요'
          onChange={(e) => onChange(e, setDescription)}
        />
      </ImageForm>
      <DefaultBtn onClick={() => onClick(description, setDescription)}>
        이미지 등록
      </DefaultBtn>
    </FormContainer>
  )
}

interface IProps {
  url?: string
  description?: string
}
export const PreviewEntity = ({ url, description }: IProps) => {
  return (
    <PreviewContainer>
      <img src={url} alt='a' />
      <p>{description}</p>
    </PreviewContainer>
  )
}
