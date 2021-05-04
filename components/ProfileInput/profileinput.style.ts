import styled, { withProps } from '@styles/themed-components'

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 40px;
`

export const Label = styled.div`
  margin-bottom: 14px;
  font-size: 20px;
`

export const Input = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.black};
  border-radius: 6px;
  padding: 0 20px;
  height: 60px;

  input {
    width: 100%;
    position: relative;
    color: #ccc;
    font-weight: 500;
    padding-left: 1.25rem;
  }
`

interface IAuth {
  auth: string
}
const authLogoUrl = {
  google:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
  kakao:
    'https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg',
}
export const AuthMark = withProps<IAuth, HTMLSpanElement>(styled.span)`
  width: 24px;
  height: 24px;
  display: inline-block;
  border-radius: 999px;
  background-color: #fff;
  padding: 3px;
  background-image: url( ${(props) =>
    props.auth === 'google'
      ? authLogoUrl.google
      : 'kakao'
      ? authLogoUrl.kakao
      : ''});
  border: 3px solid ${(props) =>
    props.auth === 'google' ? '#fff' : '#ffe812'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

`

export const ImageInputContainer = styled.div`
  width: 300px;
  height: 300px;
  background: lightgray;
  border-radius: 6px;

  input[type='file'] {
    display: none;
  }

  label {
    width: 100%;
    height: 100%;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .button-edit {
      ${({ theme }) => theme.display.flexCenterRow};
      width: 40px;
      height: 40px;
      border-radius: 999px;
      background-color: ${({ theme }) => theme.color.black};
      font-size: 0;
      position: absolute;
      bottom: 50px;
      left: 12px;
      z-index: 10;
      text-align: center;

      img {
        width: 16px;
        height: 16px;
      }
    }

    &:hover {
      .button-edit {
        background-color: ${({ theme }) => theme.color.blue};
      }
    }
  }
`
