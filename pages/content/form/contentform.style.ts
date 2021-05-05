import theme from '@styles/theme'
import styled from '@styles/themed-components'

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
