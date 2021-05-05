import styled from '@styles/themed-components'
import { view_inactive, view_active } from '@styles/icons'

export const InputContainer = styled.div`
  ${({ theme }) => theme.display.flexStartCol};
  margin: 1rem 0;
`

export const Label = styled.label`
  width: 100%;
  text-align: left;
`

export const Input = styled.input`
  color: ${({ theme }) => theme.color.white};
  display: block;
  height: 2rem;
  background-color: transparent;
  padding: 0 0.7rem;

  &:-internal-autofill-selected {
    background-color: transparent !important;
  }
`

export const PasswordContainer = styled.div`
  ${({ theme }) => theme.display.flexStartRow};
  width: 100%;
`

export const ShowController = styled.span`
  width: 20px;
  height: 20px;
  ${view_inactive}
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;

  &:hover {
    ${view_active};
  }
`
