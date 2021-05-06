import styled from '@styles/themed-components'

export const EditContainer = styled.div`
  ${({ theme }) => theme.display.flexCenterCol};
  color: ${({ theme }) => theme.color.black};
  & > div.pw-edit-container {
    padding: 0 3rem;
    ${({ theme }) => theme.display.flexCenterCol};
  }

  .pw-container {
    height: 3rem;
    ${({ theme }) => theme.display.flexCenterRow};
  }
  button {
    margin-top: 1rem;
    /* width: 70%; */
  }
  label {
    text-align: center;
    margin-bottom: 2rem;
  }
  input {
    color: ${({ theme }) => theme.color.black};
    width: 85%;
    font-size: 1rem;
  }
`
