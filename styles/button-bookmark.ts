import styled from '../styles/themed-components'

export const BookmarkContainer = styled.div`
  ${({ theme }) => theme.display.flexCenterRow};
  width: 50px;
  height: 50px;

  .hide-checkbox {
    display: none;
  }

  .star-checkbox {
    cursor: pointer;
  }

  .star-checkbox::before {
    content: '☆';
    font-size: 40px;
    color: ${({ theme }) => theme.color.inActive};
  }
  .hide-checkbox:checked + .star-checkbox:before {
    content: '★';
    font-weight: 900;
    color: ${({ theme }) => theme.color.yellow};
  }
`

export const BookmarkCheckbox = styled.input`
  display: none;
`
