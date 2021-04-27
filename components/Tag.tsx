import { TagB, TagS } from '../styles/tag'

interface IProps {
  tagname: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void // TODO: 클릭 시 태그 검색 페이지로 이동
}

export const TagBig = (props: IProps) => (
  <TagB onClick={props.onClick}># {props.tagname}</TagB>
)

export const TagSmall = (props: IProps) => (
  <TagS onClick={props.onClick}># {props.tagname}</TagS>
)
