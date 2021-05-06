import styled from '@styles/themed-components'
import { search_active, search_inactive } from '@styles/icons'

export const SearchForm = styled.form`
  width: fit-content;
  padding: 0 1rem;
  color: #fff;
  border-radius: 4px;
  ${({ theme }) => theme.display.flexCenterRow}
  ${({ theme }) => theme.concept.glassmorphism}
`

export const SearchInput = styled.input`
  width: fit-content;
  min-width: 250px;
  height: 42px;
  color: #fff;
`

export const SearchButton = styled.button`
  cursor: pointer;
  color: #fff;
  min-width: 20px;
  width: 20px;
  height: 20px;
  min-height: 20px;
  ${search_inactive}

  &:hover {
    ${search_active}
  }
`

export const SearchFormBig = styled.form`
  width: 100%;
  padding: 0 7px;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
`
export const SearchBig = styled.input`
  width: 100%;
  height: 60px;
  font-size: 2rem;
`
