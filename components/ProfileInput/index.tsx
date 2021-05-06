import { RootReducer } from '@actions/reducer'
import { updateUserAvatar } from '@actions/users'
import useAction from '@hooks/useAction'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  InputContainer,
  Label,
  Input,
  AuthMark,
  ImageInputContainer,
} from './profileinput.style'

interface IProps {
  label: string
  currentValue: string
  authType?: string
}

export const ProfileInput = ({ label, currentValue, authType }: IProps) => {
  const [value, setValue] = useState<string>(currentValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input>
        {authType && authType !== 'email' && <AuthMark auth={authType} />}
        <input
          type='text'
          maxLength={25}
          value={value}
          placeholder='이름을 입력해주세요'
          onChange={onChange}
          disabled={label === '이메일' ? true : false}
        />
      </Input>
    </InputContainer>
  )
}

interface IProfileImage {
  profileImgUrl: string
}
interface Avatar {
  url: string
  file: File | null
}

export const ProfileImageInput = ({ profileImgUrl }: IProfileImage) => {
  // const [avatar, setAvatar] = useState<Avatar>({
  //   url: profileImgUrl,
  //   file: null,
  // })
  const [avatarUrl, setAvatarUrl] = useState<string>(profileImgUrl)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)

  const _updateUserAvatar = useAction(updateUserAvatar)

  const { user, accessToken } = useSelector((state: RootReducer) => state.user)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const files = target.files
    if (files && files[0]) {
      const reader = new FileReader()
      reader.readAsDataURL(files[0])

      reader.onloadend = () => {
        console.log(`클라이언트에 업로드된 파일>>`, files[0])
        setAvatarUrl(reader.result as string)
        setAvatarFile(files[0])
        // Note: 왜 이부분에서 putUserAvatar를 실행하면 데이터를 못받아오는지 확인하기
      }
    }
  }

  const putUserAvatar = async (data: FormData, token: string) => {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user/info`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    // console.log(`제발 와라`, res)
    if (res.status === 200) {
      setAvatarUrl(res.data.profileImg)
      _updateUserAvatar(res.data.profileImg)
    }
  }

  useEffect(() => {
    if (user && accessToken && avatarFile) {
      const formData = new FormData()
      formData.append('image', avatarFile)
      formData.append('userName', user.userName as string)
      putUserAvatar(formData, accessToken)
    }
  }, [avatarFile])

  return (
    <InputContainer>
      <Label>프로필 사진</Label>
      <ImageInputContainer>
        <input
          id='profileImage'
          type='file'
          accept='image/*'
          onChange={handleFile}
        />
        <label htmlFor='profileImage'>
          <img src={avatarUrl} />
          <div className='button-edit'>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5Mi40OTI4NCA0OTIiIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMwNC4xNDA2MjUgODIuNDcyNjU2LTI3MC45NzY1NjMgMjcwLjk5NjA5NGMtMS4zNjMyODEgMS4zNjcxODgtMi4zNDc2NTYgMy4wOTM3NS0yLjgxNjQwNiA0Ljk0OTIxOWwtMzAuMDM1MTU2IDEyMC41NTQ2ODdjLS44OTg0MzggMy42Mjg5MDYuMTY3OTY5IDcuNDg4MjgyIDIuODE2NDA2IDEwLjEzNjcxOSAyLjAwMzkwNiAyLjAwMzkwNiA0LjczNDM3NSAzLjExMzI4MSA3LjUyNzM0NCAzLjExMzI4MS44NTU0NjkgMCAxLjczMDQ2OS0uMTA1NDY4IDIuNTgyMDMxLS4zMjAzMTJsMTIwLjU1NDY4OC0zMC4wMzkwNjNjMS44Nzg5MDYtLjQ2ODc1IDMuNTg1OTM3LTEuNDQ5MjE5IDQuOTQ5MjE5LTIuODEyNWwyNzEtMjcwLjk3NjU2MnptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87IiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDc2Ljg3NSA0NS41MjM0MzgtMzAuMTY0MDYyLTMwLjE2NDA2M2MtMjAuMTYwMTU3LTIwLjE2MDE1Ni01NS4yOTY4NzYtMjAuMTQwNjI1LTc1LjQzMzU5NCAwbC0zNi45NDkyMTkgMzYuOTQ5MjE5IDEwNS41OTc2NTYgMTA1LjU5NzY1NiAzNi45NDkyMTktMzYuOTQ5MjE5YzEwLjA3MDMxMi0xMC4wNjY0MDYgMTUuNjE3MTg4LTIzLjQ2NDg0MyAxNS42MTcxODgtMzcuNzE0ODQzcy01LjU0Njg3Ni0yNy42NDg0MzgtMTUuNjE3MTg4LTM3LjcxODc1em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+' />
          </div>
        </label>
      </ImageInputContainer>
    </InputContainer>
  )
}
