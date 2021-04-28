import { TagB, TagS } from './tag.style'

interface IProps {
  tagname: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void // TODO: 클릭 시 태그 검색 페이지로 이동
}

export const TagBig = ({ tagname, onClick }: IProps) => (
  <TagB onClick={onClick}># {tagname}</TagB>
)

export const TagSmall = ({ tagname, onClick }: IProps) => (
  <TagS onClick={onClick}># {tagname}</TagS>
)
