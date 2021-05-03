import styled from '@styles/themed-components'

export const Wrapper = styled.div`
  ${({ theme }) => theme.display.flexStartCol};
  h1 {
    margin-bottom: 1rem;
  }
  .thumbnails {
    ${({ theme }) => theme.display.flexCenterRow};
    flex-wrap: wrap;
  }
`
