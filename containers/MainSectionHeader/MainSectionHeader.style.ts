import styled from '@styles/themed-components'

export const Container = styled.article`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;
  display: flex;
  ${({ theme }) => theme.display.flexCenterRow}
  justify-content: space-between;
  padding-left: 11vw;
`

export const Title = styled.div`
  /* position: absolute;
  top: 50%;
  left: 0px; */
  z-index: 900;

  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.white};

  transform: translate(10%, -40%);

  & h1 {
    font-family: 'Girassol', cursive;
    font-weight: 500;
    font-size: 7rem;
  }

  & h2 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    margin-top: 1rem;
    & > span {
      color: ${({ theme }) => theme.color.secondary};
      font-family: 'Girassol', cursive;
    }
  }
`

export const PhtoCards = styled.div`
  position: absolute;
  right: 50%;
  top: 25%;

  & .polaroid-wraper {
    position: absolute;
    display: inline-block;
    margin: 1rem;
    filter: grayscale(100%);
    background-color: ${({ theme }) => theme.color.white};

    &:hover {
      filter: none;
      transition: all 0.35s;
    }

    .polaroid {
      background: #fff;
      padding: 1rem;
      box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
      img {
        height: 300px;
      }
    }

    .caption {
      font-size: 1rem;
      text-align: left;
      line-height: 2em;

      .user-info {
        font-size: 0.85rem;
        font-style: italic;
        color: grey;
      }
    }

    &:nth-child(1) {
      z-index: 1;
      transform: translate(-45%, -35%);
    }
    &:nth-child(2) {
      transform: translate(50%, -55%);
    }
    &:nth-child(3) {
      transform: translate(-10%, 40%);
    }
    &:nth-child(4) {
      transform: translate(200%, 20%);
    }
  }
`
