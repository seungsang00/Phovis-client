import styled from 'styled-components'

interface WrapperProps {
  index: number
}

export const SliderContainer = styled.div<WrapperProps>`
  margin: 0 auto;
  overflow: hidden;
  width: 100vw;
  height: 450px;

  & > .slider {
    white-space: nowrap;
    transition: ease 1000ms;

    transform: translate3d(${(props) => -props.index * 100}%, 0, 0);
    & > .slide {
      display: inline-block;

      min-height: 400px;
      width: 100%;
      img {
        width: 100%;
        max-height: 400px;
      }
      .infocontainer {
        position: absolute;
        bottom: 0px;
        margin-left: 80px;
        margin-bottom: 90px;
        color: white;
        & > .description {
          width: 60vw;

          display: inline-block;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`

export const Slideshowdots = styled.div`
  text-align: center;
  width: 100%;

  & > .dot {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 7px 0px;

    background-color: #c4c4c4;
    & .active {
      background-color: #6a0dad;
    }
  }
`
