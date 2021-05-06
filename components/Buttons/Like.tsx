import { LikeContainer, ImgContainer, LikeButton } from './like.style'

type Props = {
  id: string
  like: number
  isChecked: boolean
  onClick: (contentId: string) => void
}

const Like = ({ id, like, isChecked, onClick }: Props) => {
  return (
    <LikeContainer>
      <ImgContainer onClick={() => onClick(id)}>
        <LikeButton isActive={isChecked} />
        <span>{like}</span>
      </ImgContainer>
    </LikeContainer>
  )
}

export default Like
