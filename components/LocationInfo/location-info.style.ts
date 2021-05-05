import styled from 'styled-components'

export const LocContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60px;
  ${({ theme }) => theme.display.flexCenterRow}
  padding: 10px;
  justify-content: start;
  align-items: center;

  & span.location {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-left: 0.5rem;
  }
`
