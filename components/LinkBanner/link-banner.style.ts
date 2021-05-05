import styled from '@styles/themed-components'

export const LinkBannerDiv = styled.div`
  width: 100%;
  max-width: 180px;
  height: 15rem;
  border-radius: 12px;
  ${({ theme }) => theme.display.flexCenterRow};
  ${({ theme }) => theme.concept.glassmorphism};
  padding: 20px;
  margin: 1rem 0;

  div {
    cursor: pointer;
  }
  span {
    display: inline-block;
    text-align: center;
    margin: 0.8rem 0;
  }
`
