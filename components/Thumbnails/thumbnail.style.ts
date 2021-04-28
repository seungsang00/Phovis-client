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
