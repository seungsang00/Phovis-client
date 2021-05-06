import styled, { withProps } from '@styles/themed-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.concept.glassmorphism};
  ${({ theme }) => theme.display.flexCenterCol};
  z-index: 8999;
`

interface ModalSize {
  width: string
  height: string
}
export const ModalContent = withProps<ModalSize, HTMLDivElement>(styled.div)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${({ theme }) => theme.display.flexCenterCol};
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 6px;
  z-index: 9999;
`
