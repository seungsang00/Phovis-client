import styled from 'styled-components'

export const LocContainer = styled.div`
  width: 100%;
  max-height: 30px;
  ${({ theme }) => theme.display.flexCenterCol}
  padding: 10px;
  display: flex;
  justify-content: start;
  flex-direction: row;
  & span.location {
    font-weight: 600;
    font-size: 18px;
  }
`
