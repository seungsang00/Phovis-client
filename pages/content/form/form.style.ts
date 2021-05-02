import styled from '@styles/themed-components'

export const FormLayout = styled.div`
  width: 100%;
  overflow-x: hidden;

  section {
    display: flex;
    border: 1px solid coral;

    textarea {
      font-size: 1.5rem;
      padding: 24px;
    }
  }

  section.banner {
    ${({ theme }) => theme.display.flexStartCol};
    justify-content: flex-end;

    input {
      font-size: 2.5rem;
      min-height: 4rem;
      width: 90%;
    }
  }

  section.form {
    ${({ theme }) => theme.display.flexCenterRow};
    flex-wrap: wrap;

    & > div {
      display: flex;
      flex-wrap: wrap;
    }
  }

  section.buttons {
    display: flex;
    justify-content: flex-end;
  }
`
