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

export const ContentContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
`