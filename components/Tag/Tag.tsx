import { TagB, TagS } from './tag.style'

interface IProps {
  tagname: string
  onClick: (e: String) => void
}

export const TagBig = ({ tagname, onClick }: IProps) => (
  <TagB onClick={() => onClick(tagname)}># {tagname}</TagB>
)

export const TagSmall = ({ tagname, onClick }: IProps) => (
  <TagS onClick={() => onClick(tagname)}># {tagname}</TagS>
)
