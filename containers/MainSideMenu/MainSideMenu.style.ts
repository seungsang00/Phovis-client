import styled from '@styles/themed-components'

export const SideMenu = styled.aside`
  display:flex;
  flex-direction:column;
  justify-content: center;

  position: fixed;
  left:0;
  top:0;
  z-index: 8000;

  width:auto;
  height:100vh;
  padding: 0 1rem;
  background-color: ${ ({ theme }) => theme.color.primary };
  color:${({ theme }) => theme.color.white};
`

export const Menu = styled.a`
position: relative;
  &:not(:last-child){
    margin-bottom: 1rem;
  }
`

export const LinkMenu = styled.div`

`