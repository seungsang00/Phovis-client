import styled from 'styled-components'

export const LikeContainer = styled.div`
  padding: 10px;
  justify-content: end;
  flex-direction: row;
  align-items: center;
`

interface WrapperProps {
  isActive: boolean
}

export const ImgContainer = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  .heart {
    fill: ${(props) => (props.isActive ? 'red' : 'black')};
    position: relative;
  }
  & > span {
    padding-left: 5px;
    font-size: 1rem;
  }
`
