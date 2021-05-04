import styled from '@styles/themed-components'

// TODO: withProps를 이용해 테마를 받아와서 적용하기

export const Button = styled.button`
  padding: 10px 18px;
  margin-left: 10px;
  border-radius: 999px;
  border: 3px solid ${({ theme }) => theme.color.black};
  font-size: 15px;
  text-align: center;
  font-weight: 700;
  cursor: pointer;
`
