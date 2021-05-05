import styled from '@styles/themed-components'

// TODO: withProps를 이용해 테마를 받아와서 적용하기

export const Button = styled.button`
  width: 10rem;
  padding: 10px 18px;
  margin-left: 10px;
  border-radius: 999px;
  border: 1.2px solid ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.secondary};
  font-size: 1rem;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.white};
  }
`
