import styled from '@styles/themed-components'

export const PhotoWrap = styled.div`
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  /* background-color: #fff; */

  &:hover {
    .photo-info {
      transform: translateY(0);
    }
    .photo-info p {
      opacity: 1;
      font-weight: 500;
    }
    .photo-info,
    .photo-info p {
      transition: 0.6s $hoverEasing;
    }
    .photo-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .photo-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .photo {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }

  .photo {
    position: relative;
    flex: 0 0 240px;
    min-width: 240px;
    height: 320px;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
      inset rgba(white, 0.5) 0 0 0 6px;
    transition: 1s $returnEasing;
  }

  .photo-bg {
    opacity: 0.5;
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
    pointer-events: none;
  }

  .photo-info {
    padding: 20px;
    position: absolute;
    bottom: 0;
    color: #fff;
    transform: translateY(40%);
    transition: 0.2s 0.61s cubic-bezier(0.215, 0.61, 0.355, 1);

    p {
      opacity: 0;
      text-shadow: rgba(black, 1) 0 2px 3px;
      transition: 0s 0.61s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
`
