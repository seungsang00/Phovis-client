import styled from '@styles/themed-components'

export const LinkBannerDiv = styled.div`
  width: 100%;
  height: 5rem;
  border-radius: 12px;
  ${({ theme }) => theme.display.flexCenterRow};
  ${({ theme }) => theme.concept.glassmorphism};
  padding: 10px;
`
