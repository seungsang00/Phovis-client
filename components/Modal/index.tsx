import React from 'react'
import { ModalOverlay, ModalContent } from './modal.style'

interface IModal {
  w: string
  h: string
  children: any
  handleModalClose: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Modal = ({ w, h, children, handleModalClose }: IModal) => (
  <ModalOverlay className='overlay' onClick={handleModalClose}>
    <ModalContent width={w} height={h} className='content'>
      {children}
    </ModalContent>
  </ModalOverlay>
)
