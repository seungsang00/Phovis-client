import styled from './themed-components'

export const TagS = styled.button`
  width: fit-content;
  height: fit-content;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ theme }) => theme.color.black};
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
