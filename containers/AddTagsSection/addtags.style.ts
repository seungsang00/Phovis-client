import styled from '@styles/themed-components'

export const TagSection = styled.section`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 24px;

  & > input {
    font-size: 1.2rem;
  }
`
export const TagTooltip = styled.div`
  width: 16rem;
  height: fit-content;
  font-size: 0.75rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.black};
  color: #fff;
  position: relative;
`
