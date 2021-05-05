import styled from '@styles/themed-components'

export const Container = styled.article`
  width: 100vw;
  height: 100vh;
  padding: 10vh 10vw;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  position: relative;

  display: flex;
  flex-direction: column;
`
export const Title = styled.div`
  margin-bottom: 2rem;
`

export const ContentGrid = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const ContentTagContainer = styled.div`
  /* flex:7; */
  display: flex;
  align-items: center;
`

export const TagList = styled.div`
  /* flex:3; */
  display: flex;
  flex-direction: column;

  & h3 {
    margin-bottom: 1.5rem;
  }

  & .tags {
    display: flex;
    flex-direction: column;
    align-items: center;

    & button:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`
