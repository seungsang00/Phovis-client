import { Wrapper, EditButton } from './polaroid.style'
import { IPhotoCard } from '@interfaces'
import { MouseEventHandler, useState } from 'react'
import { Modal } from '@components/Modal'

interface Props {
  isOwner: boolean
  handleModify?: MouseEventHandler<HTMLButtonElement>
  type: 'main' | 'content'
}

const Polaroid = ({
  isOwner,
  handleModify,
  imageurl,
  userName,
  description,
  type,
}: IPhotoCard & Props) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  // ! Modal control
  const handleModalOpen = () => {
    setModalIsOpen(true)
  }

  const handleModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if (target.localName === 'div' && target.className.includes('overlay')) {
      setModalIsOpen(false)
    }
  }
  return (
    <>
      <Wrapper>
        <div className='polaroid' onClick={handleModalOpen}>
          {type === 'content' && isOwner && (
            <EditButton onClick={handleModify}>
              <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5Mi40OTI4NCA0OTIiIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMwNC4xNDA2MjUgODIuNDcyNjU2LTI3MC45NzY1NjMgMjcwLjk5NjA5NGMtMS4zNjMyODEgMS4zNjcxODgtMi4zNDc2NTYgMy4wOTM3NS0yLjgxNjQwNiA0Ljk0OTIxOWwtMzAuMDM1MTU2IDEyMC41NTQ2ODdjLS44OTg0MzggMy42Mjg5MDYuMTY3OTY5IDcuNDg4MjgyIDIuODE2NDA2IDEwLjEzNjcxOSAyLjAwMzkwNiAyLjAwMzkwNiA0LjczNDM3NSAzLjExMzI4MSA3LjUyNzM0NCAzLjExMzI4MS44NTU0NjkgMCAxLjczMDQ2OS0uMTA1NDY4IDIuNTgyMDMxLS4zMjAzMTJsMTIwLjU1NDY4OC0zMC4wMzkwNjNjMS44Nzg5MDYtLjQ2ODc1IDMuNTg1OTM3LTEuNDQ5MjE5IDQuOTQ5MjE5LTIuODEyNWwyNzEtMjcwLjk3NjU2MnptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0idXNlci1zZWxlY3Q6IGF1dG87IiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDc2Ljg3NSA0NS41MjM0MzgtMzAuMTY0MDYyLTMwLjE2NDA2M2MtMjAuMTYwMTU3LTIwLjE2MDE1Ni01NS4yOTY4NzYtMjAuMTQwNjI1LTc1LjQzMzU5NCAwbC0zNi45NDkyMTkgMzYuOTQ5MjE5IDEwNS41OTc2NTYgMTA1LjU5NzY1NiAzNi45NDkyMTktMzYuOTQ5MjE5YzEwLjA3MDMxMi0xMC4wNjY0MDYgMTUuNjE3MTg4LTIzLjQ2NDg0MyAxNS42MTcxODgtMzcuNzE0ODQzcy01LjU0Njg3Ni0yNy42NDg0MzgtMTUuNjE3MTg4LTM3LjcxODc1em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSJ1c2VyLXNlbGVjdDogYXV0bzsiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+' />
            </EditButton>
          )}
          <img src={imageurl} />
          <div className='caption'>
            <p className='description'>{description}</p>
            <span className='user-info'>@ {userName}</span>
          </div>
        </div>
      </Wrapper>
      {modalIsOpen && (
        <Modal w={'0px'} h={'0px'} handleModalClose={handleModalClose}>
          <Wrapper>
            <div className='polaroid'>
              <img src={imageurl} />
              <div className='caption'>
                <p className='description'>{description}</p>
                <span className='user-info'>@ {userName}</span>
              </div>
            </div>
          </Wrapper>
        </Modal>
      )}
    </>
  )
}
export default Polaroid
