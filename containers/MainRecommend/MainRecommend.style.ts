import styled from '@styles/themed-components'

export const Container = styled.article`
  width: 100vw;
  height: 100%;
  padding: 10vh 10vw;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  position: relative;

  display: flex;
  flex-direction: column;
`
export const Title = styled.div`
  margin-bottom: 2rem;
  padding: 0 1rem;
  font-size: 2rem;
`

export const ContentGrid = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${({ theme }) => theme.size.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${({ theme }) => theme.size.tabletM} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.size.tabletS} {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContentTagContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const TagList = styled.div`
  width: 300px;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.display.flexStartCol}

  & h3 {
    margin-bottom: 1.5rem;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
  }

  & .tags {
    ${({ theme }) => theme.display.flexStartRow}

    & button {
      margin: 0 0.5rem 1.25rem;
    }
  }

  @media ${({ theme }) => theme.size.tabletM} {
    display: none;
  }
`
