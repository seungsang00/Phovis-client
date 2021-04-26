import styled from 'styled-components'

export const PhotoCardInputContainer = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem;
  & .titlecontainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    margin-top: 10px;
  }
  & button {
    margin-top: 5px;
  }
`

export const ImageInputbtn = styled.input`
  display: none;
`
