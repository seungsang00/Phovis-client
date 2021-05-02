// 여러 상위 컴포넌트에 사용되는 컴포넌트들
import styled, { withProps } from '@styles/themed-components'

// 배경 이미지를 갖는 div 엘리먼트
interface IBg {
  bgUrl: string
  p: string
}

export const DivWithBgImg = withProps<IBg, HTMLDivElement>(styled.div)`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  ${({ theme }) => theme.display.flexStartCol};
  justify-content: flex-end;
  padding: ${(props) => props.p};
  overflow: hidden;

  div.main-title {
    font-size: 3rem;
    font-weight: 700;
    position: absolute;
    left: 40px;
    bottom: 50vh;
  }
  div.top-right {
    position: absolute;
    right: 30px;
    top: 81px;
    z-index: 1;
  }
  div.bottom-left {
    position: absolute;
    left: 30px;
    bottom: 41vh;
    z-index: 1;
  }
  div.bottom-right {
    position: absolute;
    right: 30px;
    bottom: 41vh;
    z-index: 1;
  }
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
  width: ${(props) => props.w || 100}px;
  height: ${(props) => props.h || 50}px;
  border-radius: 10px;
  text-align: center;
  line-height: ${(props) => props.h - 5}px;
  color: ${({ theme }) => theme.color.green};
  border: 3px solid ${({ theme }) => theme.color.green};
  background-color: transparent;
  font-size: ${(props) => props.fsize || 1}rem;
  padding: 0 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.inActive};
    color: #fff;
  }
`
