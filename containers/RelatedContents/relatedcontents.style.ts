import styled from '@styles/themed-components'

export const Wrapper = styled.div`
  ${({ theme }) => theme.display.flexStartCol};
  .section-title {
    font-weight: 600;
  }
  .thumbnails {
    ${({ theme }) => theme.display.flexStartRow};
    flex-wrap: wrap;
  }
`
