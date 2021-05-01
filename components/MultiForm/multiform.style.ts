import styled from '@styles/themed-components'

export const StyledForm = styled.form`
  input {
    display: none;
  }
  label {
    width: 300px;
    height: 300px;
    color: grey;
    font-weight: 600;
    border: 3px dashed lightgrey;
    border-radius: 10px;
    ${({ theme }) => theme.display.flexCenterCol}
    font-size: 5rem;
    margin: 1rem 0;
    cursor: pointer;
  }
`
