// 여러 상위 컴포넌트에 사용되는 컴포넌트들
import styled, { withProps } from '../styles/themed-components'

// 배경 이미지를 갖는 div 엘리먼트
interface IBg {
  bgUrl: string
  p: string
}

export const DivWithBgImg = withProps<IBg, HTMLDivElement>(styled.div)`
  width: 100%;
  height: 100%;
  width: 400px;
  min-height: 400px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  ${({ theme }) => theme.display.flexStartCol};
  justify-content: flex-end;
  padding: ${(props) => props.p};
  overflow: hidden;
`

// 유저 프로필이미지
interface IAvartar {
  size?: number
  url?: string
}

export const AvatarWithProps = withProps<IAvartar, HTMLDivElement>(styled.div)`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 1rem;
`

// Submit Button
interface ISize {
  w?: number
  h?: number
}

export const Button = withProps<ISize, HTMLButtonElement>(styled.button)`
  width: ${(props) => props.w && props.w + 'px'};
  height: ${(props) => props.h}px;
  border-radius: 10px;
  text-align: center;
  line-height: ${(props) => props.h - 5}px;
  color: ${({ theme }) => theme.color.green};
  border: 3px solid ${({ theme }) => theme.color.green};
  background-color: transparent;
  font-size: 1.2em;
  padding: 0 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.green};
    color: #fff;
  }
`
