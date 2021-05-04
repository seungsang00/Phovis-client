import styled from '@styles/themed-components'

export const Card = styled.div`
  width: 100%;
  min-width: 412px;
  height: 60px;
  ${({ theme }) => theme.display.flexCenterCol}
  ${({ theme }) => theme.concept.glassmorphism}
  padding: 10px;

  & > div {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    align-items: center;
  }
  & div.info {
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: flex-start;

    & span.username {
      font-weight: 600;
      font-size: 21px;
      margin-bottom: 6px;
    }

    & span.count-info {
      font-size: 14px;
      & span.count {
        font-weight: 500;
        color: #0b7dff;
      }
    }
  }
`

export const Button = styled.button`
  width: fit-content;
  height: 24px;
  border: 1px solid #333;
  align-self: flex-start;
  justify-self: flex-end;
  margin: 5px 0 0 20px;
`
