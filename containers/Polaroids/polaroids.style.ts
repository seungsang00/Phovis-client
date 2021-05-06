import styled from '@styles/themed-components'
import { home_active, home_inactive } from '@styles/icons'

export const Container = styled.section`
  ${({ theme }) => theme.display.flexStartRow};
  flex-wrap: wrap;
  justify-content: center;

  & .photocardUploadTitle {
    width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;

    div.photocard-upload-btn-area {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 2rem;
      cursor: pointer;

      span {
        line-height: 1rem;
        padding: 4px 4px 0 0;
      }

      & .upload-btn {
        width: 24px;
        height: 24px;

        margin: 0 0 0 5px;

        ${home_inactive}

        &:hover {
          ${home_active}
        }
      }
    }
  }
`
