import styled from '@styles/themed-components'

export const ThumbnailContainer_rect = styled.div`
  & > div {
    /* 그리드 */
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      '. . bookmark'
      'title title title'
      'user user like';
    align-items: center;
    .bookmark {
      grid-area: bookmark;
      justify-self: flex-end;
    }
    .like {
      grid-area: like;
      justify-self: flex-end;
    }
    & > div {
      grid-area: user;
    }
  }

  /* 크기 설정 */
  width: 400px;
  height: calc(400px * 60%);

  & div.user-info {
    ${({ theme }) => theme.display.flexCenterRow}
  }
`

export const ThumbnailContainer_square = styled.div`
  width: 400px;
  height: 400px;
  & > div > div {
    align-items: flex-end;
  }
`

export const ThumbnailWrap = styled.div`
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  /* background-color: #fff; */

  &:hover {
    .thumbnail-info {
      transform: translateY(0);
    }
    .thumbnail-info p {
      opacity: 1;
      font-weight: 400;
    }
    .thumbnail-info,
    .thumbnail-info p {
      transition: 0.6s $hoverEasing;
    }
    .thumbnail-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .thumbnail-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .thumbnail {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }

  .thumbnail {
    position: relative;
    flex: 0 0 270px;
    width: 270px;
    height: 270px;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
      inset rgba(white, 0.5) 0 0 0 6px;
    transition: 1s $returnEasing;
  }

  .thumbnail-bg {
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

  .thumbnail-info {
    padding: 20px;
    position: absolute;
    bottom: 20px;
    color: #fff;
    transform: translateY(10%);
    /* transition: 0.2s 0.61s cubic-bezier(0.215, 0.61, 0.355, 1); */
    transition: 0.2s 0.61s ease-in-out;

    h1 {
      font-size: 1.2rem;
    }
    p {
      opacity: 0;
      text-shadow: rgba(black, 1) 0 2px 3px;
      transition: 0s 0.61s cubic-bezier(0.215, 0.61, 0.355, 1);

      &:before {
        content: '@ ';
      }
    }
  }
`
