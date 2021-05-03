import styled from '@styles/themed-components'

export const Wrapper = styled.div`
  ${({ theme }) => theme.display.flexStartCol};
  .thumbnails {
    ${({ theme }) => theme.display.flexCenterRow};
    flex-wrap: wrap;
  }
`
