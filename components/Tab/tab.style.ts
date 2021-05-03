import styled from '@styles/themed-components'

export const TabWrapper = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 20px;

  ul {
    ${({ theme }) => theme.display.flexCenterRow};
    height: 100%;
  }

  li {
    width: 7rem;
    height: 100%;
    text-align: center;
    ${({ theme }) => theme.display.flexCenterRow};
    margin: 0 10px;
    font-size: 1.2rem;

    &:hover {
      border-bottom: 3px solid blue;
    }
  }
`
