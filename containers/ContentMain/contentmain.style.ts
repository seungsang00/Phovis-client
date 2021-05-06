import styled from '@styles/themed-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 10rem;

  .section-title {
    margin-bottom: 1rem;
    font-weight: 500 !important;
  }

  section {
    width: 100%;
    margin: 1rem 0;
  }

  section.description {
    font-size: 1.2rem;
    line-height: 2rem;
  }

  section.photo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  section.location,
  section.tags {
    /* text-align: left;
    display: flex;
    justify-content: flex-start; */
  }

  @media ${({ theme }) => theme.size.desktop} {
    padding: 36px 10rem;
  }
  @media ${({ theme }) => theme.size.tabletM} {
    padding: 36px 6rem;
  }
  @media ${({ theme }) => theme.size.tabletS} {
    padding: 36px 4rem;
  }
`
