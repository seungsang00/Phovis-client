import styled from '@styles/themed-components'

export const LocContainer = styled.div`
  width: 100%;
  max-height: 30px;
  ${({ theme }) => theme.display.flexCenterRow}
  padding: 10px;
  justify-content: start;

  & span.location {
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.4rem;
    margin-left: 0.5rem;
  }
`
