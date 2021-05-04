import styled from 'styled-components'

export const LocContainer = styled.div`
  width: 100%;
  max-height: 30px;
  ${({ theme }) => theme.display.flexCenterRow}
  padding: 10px;
  justify-content: start;

  & span.location {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-left: 0.5rem;
  }
`
