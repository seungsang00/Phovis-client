import styled from '@styles/themed-components'

export const Container = styled.article`
  width:100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;
`

export const Title = styled.div`
  position: absolute;
  top: 50%;
  display:flex;
  flex-direction:column;
  color:${({ theme }) => theme.color.white};

  transform:translate(70%, -50%);

  & h1{
    font-size:56px;
  }

  & h2{
    font-size:26px;
  }

`

export const PhtoCards = styled.div`
  position: absolute;
  right:50%;
  top:25%;

  & .polaroid-wraper{
    position: absolute;
    display: inline-block;
    margin: 1rem;
    filter: grayscale(100%);
    background-color:${({ theme }) => theme.color.white};

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

    &:nth-child(1){
      transform: translate(-45%, -45%);
    }
    &:nth-child(2){
      transform: translate(50%, -55%);
    }
    &:nth-child(3){
      transform: translate(-10%, 40%);
    }
    &:nth-child(4){
      transform: translate(200%, 20%);
    }
  }
`
