import theme from '@styles/theme'
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

export const Main = styled.main`
  margin: 0px 10%;
  margin-top: 60px;
  height: 100%;

  .title {
    color: ${theme.color.secondary};
  }
  input {
    color: ${theme.color.inActive};
  }
  .textarea {
    position: relative;
    textarea {
      overflow: hidden;
      color: white;
    }
  }
  & > .locationContainer {
    min-height: 60px;
    height: 100%;
    & > section {
      min-height: 60px;
    }
  }

  & > .banner {
    object-fit: contain;
  }

  & > .form .container {
    width: 100%;
  }
`
