import styled from 'styled-components'

export const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;

  & div.horizontal {
    display: flex;
    justify-content: start;
    flex-direction: row;
    align-items: center;
  }

  & div.vertical {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    & > span {
      margin-left: 3px;
    }
  }

  & span.userName {
    font-weight: 500;
    font-size: 1.5rem;
    margin-left: 0.25rem;
  }
`

interface ISize {
  size?: number
}

export const Avatar = styled.img<ISize>`
  width: ${(props) => props.size || 38}px;
  height: ${(props) => props.size || 38}px;
  object-fit: cover;
  border-radius: 50%;
  .horizontal > & {
    margin-right: 0.5rem;
  }

  .vertical > & {
    margin-bottom: 3px;
  }
`
