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
    cursor: pointer;
  }
`

// export const TabWrapper = styled.div`
//   width: 100%;
//   height: 70px;
//   padding: 0 20px;

//   ul {
//     ${({ theme }) => theme.display.flexCenterRow};
//     height: 100%;
//   }

//   li {
//     width: 7rem;
//     height: 100%;
//     text-align: center;
//     ${({ theme }) => theme.display.flexCenterRow};
//     margin: 0 10px;
//     font-size: 1.2rem;

//     &.active {
//       border-bottom: 1px solid blue;
//     }

//     &:hover {
//       border-bottom: 3px solid blue;
//     }
//   }
// `
