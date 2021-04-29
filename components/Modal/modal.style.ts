import styled from '@styles/themed-components'

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.concept.glassmorphism};
  ${({ theme }) => theme.display.flexCenterCol};
`
export const ModalContent = styled.div`
  width: 800px;
  height: 800px;
  ${({ theme }) => theme.display.flexCenterCol};
  background-color: lightcyan;
  border-radius: 50px;
`
