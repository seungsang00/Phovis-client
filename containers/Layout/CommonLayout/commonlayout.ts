import styled from '@styles/themed-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  /* position: sticky; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: top 0.3s;
`
export const HeaderInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  color: #fff;
  z-index: 1001;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.07);
  /* ${({ theme }) => theme.concept.glassmorphism} */

  div {
    display: flex;
    align-items: center;
  }

  .sub-menu {
    margin-right: 1rem;

    & .search-bar {
      margin-right: 2rem;
    }

    & .link-text{
      cursor:pointer;
    }

    & .link-text:hover{
      color: ${ ({theme}) => theme.color.secondaryLight }
    }
  }

  .main-logo {
    cursor: pointer;
  }

  /* a {
    width: 40px;
    height: 40pc;
  } */
`
export const Banner = styled.div`
  width: 100%;
  height: 40vh;
  overflow: hidden;
  border: 1px solid lightslategray;
`
export const Main = styled.main`
  width: 100%;
  min-height: 90vh;
  /* padding: 0 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`
