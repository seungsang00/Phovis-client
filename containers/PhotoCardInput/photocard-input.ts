import styled from '@styles/themed-components'

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
        background-color: ${({ theme }) => theme.color.secondary};
      }
    }
  }
`

export const PhotoCardInputContainer = styled.div`
  height: 100%;
  ${({ theme }) => theme.display.flexCenterCol}
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem;
  padding: 1.8rem;

  & .titlecontainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 10px;
    align-items: center;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  & textarea {
    padding: 0.5rem;
    min-height: 5rem;
    border-radius: 6px;
    margin: 10px 0;
    background-color: rgba(255, 255, 255, 0.5);
  }
  & button {
    margin-top: 5px;
  }
`

export const ImageInputbtn = styled.input`
  display: none;
`
