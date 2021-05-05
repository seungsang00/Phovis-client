import styled from '@styles/themed-components'

export const Container = styled.article`
  width:100vw;
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
  padding: 0 1rem;
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const ContentTagContainer = styled.div`
  display: flex;
  align-items:center;
`

export const TagList = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction:column;

  & h3{
    margin-bottom:1.5rem;
    font-size:24px;
    text-align:center;
  }

  & .tags{
    display: flex;
    flex-direction:column;
    align-items: center;

    & button:not(:last-child){
      margin-bottom:1.25rem;
    }

  }

`