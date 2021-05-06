import styled from '@styles/themed-components'

export const TagS = styled.button`
  width: fit-content;
  min-width: fit-content;
  height: 2rem;
  font-size: 1rem;
  line-height: 18px;
  text-align: center;
  padding: 5px 1rem;
  margin: 0.5rem 0;
  margin-right: 0.75rem;
  border-radius: 999px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  &:nth-child(n) {
    background-color: ${({ theme }) => theme.color.secondary};
  }
  &:nth-child(2n) {
    background-color: ${({ theme }) => theme.color.secondaryLight};
  }
  &:nth-child(3n) {
    background-color: ${({ theme }) => theme.color.secondaryDark};
  }
`

export const TagB = styled.button`
  width: fit-content;
  height: fit-content;
  font-size: 1.1rem;
  line-height: 1.7rem;
  text-align: center;
  padding: 7px 14px;
  border-radius: 999px;
  color: ${({ theme }) => theme.color.white};

  &:nth-child(n) {
    background-color: ${({ theme }) => theme.color.secondary};
  }
  &:nth-child(2n) {
    background-color: ${({ theme }) => theme.color.secondaryLight};
  }
  &:nth-child(3n) {
    background-color: ${({ theme }) => theme.color.secondaryDark};
  }
  cursor: pointer;
`
