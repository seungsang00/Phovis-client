import styled from 'styled-components'

export const A = styled.a``
export const Li = styled.li`
  display: inline-block;
  margin: 0 0 -1px;
  padding: 15px 25px;
  font-weight: 600;
  text-align: center;
  color: #bbb;
  border: 1px solid transparent;

  &:hover {
    color: #555;
  }
  &:active {
    color: ${(props) => props.theme.primaryColor};
    border: 1px solid #ddd;
    border-bottom: 2px solid #2e9cdf;
    border-top: 1px solid #ffffff;
  }
`
