import styled from '@styles/themed-components'

export const SideTab = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 8000;

  width: auto;
  height: 100vh;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};

  li {
    font-size: 1rem;
    cursor: pointer;
    margin: 1rem 0;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.color.secondaryDark};
    }

    &.active {
      border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
    }
  }
`
