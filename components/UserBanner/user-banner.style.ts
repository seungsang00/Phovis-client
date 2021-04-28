import styled from '../../styles/themed-components'

export const BannerContainer = styled.div`
  width: 100vw;
  height: 400px;

  & div.user-info {
    ${({ theme }) => theme.display.flexCenterRow}
  }
`
