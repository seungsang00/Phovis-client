import styled from '@styles/themed-components'

export const FormContainer = styled.div`
  ${({ theme }) => theme.display.flexCenterCol}
`
export const ImageForm = styled.form`
  ${({ theme }) => theme.display.flexCenterCol}
  margin-bottom: 1rem;

  input[type='file'] {
    display: none;
  }

  label {
    width: 300px;
    height: 300px;
    color: grey;
    font-weight: 600;
    border: 1px solid grey;
    border-radius: 10px;
    ${({ theme }) => theme.display.flexCenterCol}
    font-size: 5rem;
    margin-bottom: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    div {
      ${({ theme }) => theme.display.flexCenterCol}
      span {
        font-size: 1rem;
      }
    }
  }

  input[type='text'] {
    box-sizing: border-box;
    width: 300px;
    min-height: 2rem;
    padding: 0 1rem;
    border: 1px solid grey;
    border-radius: 8px;
  }
`

export const PreviewContainer = styled.div`
  ${({ theme }) => theme.display.flexCenterCol}
  width: 300px;
  margin-right: 1rem;
  img {
    width: 300px;
    height: 300px;
    object-fit: contain;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    height: 2rem;
    padding: 0 1rem;
  }
`
