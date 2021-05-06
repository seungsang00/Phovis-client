import styled from '@styles/themed-components'
import { home_active, home_inactive} from '@styles/icons'

export const Container = styled.section`
  ${({ theme }) => theme.display.flexStartRow};
  flex-wrap: wrap;
  justify-content: center;


  & .photocardUploadTitle{
    width:100%;
    display:flex;
    justify-content: space-between;

    margin-bottom:1rem;

    & .upload-btn{
      width:24px;
      height:24px;
      cursor:pointer;

      ${home_inactive}

      &:hover{
        ${home_active}
      }
    }



  }

`
