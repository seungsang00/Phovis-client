import styled from '@styles/themed-components'

export const FormLayout = styled.div`
  width: 100%;
  overflow-x: hidden;

  & section {
    display: flex;
    border: 1px solid coral;
  }

  & section.banner {
    ${({ theme }) => theme.display.flexStartCol};
    justify-content: flex-end;

    & input {
      font-size: 2.5rem;
    }
  }

  & section.buttons {
    display: flex;
    justify-content: flex-end;
  }
`
