import styled from '@styles/themed-components'

export const SearchResultSection = styled.section`
  padding: 3rem 10rem;

  article {
    ${({ theme }) => theme.display.flexStartCol}

    & > div {
      ${({ theme }) => theme.display.flexStartRow}
    }
  }

  div.link-to-write {
    font-size: 1.12rem;
    height: 3rem;
    margin-top: 2rem;
    cursor: pointer;
    span {
      margin-left: 3px;
    }

    &:hover {
      span {
        font-size: 1.5rem;
      }
    }
  }
`
