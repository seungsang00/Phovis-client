import styled from '@styles/themed-components'

export const SearchForm = styled.form`
  width: fit-content;
  padding: 0 2rem;
  color: #fff;
  background-color: ${({ theme }) => theme.color.primaryLight};
  border-radius: 4px;
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
