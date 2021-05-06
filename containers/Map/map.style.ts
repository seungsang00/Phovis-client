import styled from '@styles/themed-components'

export const Wrapper = styled.div`
  ${({ theme }) => theme.display.flexCenterCol}

  div.location-info {
    margin: 1rem 0;
    width: 100%;
    p {
      color: ${({ theme }) => theme.color.primary};
      font-weight: 500;
      font-size: 1.1rem;
      margin: 1rem 0;
    }
    p.map-info {
      color: ${({ theme }) => theme.color.primaryLight};
      font-size: 0.9rem;
      margin-top: 0.3rem;
    }
    p.main-info > span {
      margin-left: 0.3rem;
    }
  }
`
