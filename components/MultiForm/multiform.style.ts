import styled from '@styles/themed-components'
import { photo_active, photo_inactive } from '@styles/icons'

export const StyledForm = styled.form`
  input {
    display: none;
  }
  label {
    width: 300px;
    height: 300px;
    color: grey;
    font-weight: 600;
    border: 2px solid ${({ theme }) => theme.color.primaryLight};
    border-radius: 10px;
    ${({ theme }) => theme.display.flexCenterCol}
    font-size: 5rem;
    margin: 1rem 0 0 1.2rem;
    cursor: pointer;

    div {
      width: 30%;
      height: 30%;
      ${photo_inactive}
    }

    &:hover {
      border: 2px solid ${({ theme }) => theme.color.secondary};
      background-color: rgba(255, 255, 255, 0.1);
      div {
        ${photo_active}
      }
    }
  }
`
