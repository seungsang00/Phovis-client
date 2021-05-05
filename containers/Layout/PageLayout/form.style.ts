import styled from '@styles/themed-components'

export const FormLayout = styled.div`
  width: 100%;
  overflow-x: hidden;

  section {
    display: flex;

    textarea {
      font-size: 1.2rem;
      padding: 24px;
      min-height: 16rem;
      color: ${({ theme }) => theme.color.white};
    }
  }

  section.banner {
    ${({ theme }) => theme.display.flexStartCol};
    justify-content: flex-end;
    height: 25rem;

    input {
      font-size: 2.5rem;
      min-height: 4rem;
      width: 90%;
      color: ${({ theme }) => theme.color.white};
      margin-left: 3rem;
    }
  }

  div.main-area {
    padding: 0 3rem 3rem;
  }

  section.form {
    ${({ theme }) => theme.display.flexCenterRow};
    flex-wrap: wrap;

    & > div {
      display: flex;
      flex-wrap: wrap;
    }
  }

  div.images-container {
    width: 100%;
  }

  section.buttons {
    display: flex;
    justify-content: flex-end;
    margin: 3rem 0;
  }
`
