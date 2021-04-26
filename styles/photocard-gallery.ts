import styled from 'styled-components'

export const PhotocardGalleryContainer = styled.div`
  width: 100%;
  column-count: 3;
  column-gap: 2rem;

  @media ${({ theme }) => theme.size.tabletS} {
    column-count: 1;
  }

  @media ${({ theme }) => theme.size.tabletM} {
    column-count: 2;
  }

  @media ${({ theme }) => theme.size.laptop} {
    column-count: 3;
  }
`
