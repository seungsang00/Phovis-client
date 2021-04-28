import styled from '@styles/themed-components'

export const TagS = styled.button`
  width: fit-content;
  height: 2rem;
  font-size: 1rem;
  line-height: 18px;
  text-align: center;
  padding: 5px 1rem;
  margin: 0 0.75rem 0 0;
  border-radius: 999px;
  color: #fff;
  background-color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
`

export const TagB = styled.button`
  width: fit-content;
  height: fit-content;
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  padding: 7px 14px;
  border-radius: 7px;
  color: #fff;
  background-color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
`
