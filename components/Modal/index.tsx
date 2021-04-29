import React from 'react'
import { ModalOverlay, ModalContent } from './modal.style'

interface IModal {
  children: any
  handleModalClose: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Modal = ({ children, handleModalClose }: IModal) => (
  <ModalOverlay className='overlay' onClick={handleModalClose}>
    <ModalContent className='content'>{children}</ModalContent>
  </ModalOverlay>
)
