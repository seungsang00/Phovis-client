import styled from '@styles/themed-components'

export const SignPageLayout = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;

  .title {
    color: ${({ theme }) => theme.color.white};
    text-align: left;
    margin-bottom: 2rem;

    span {
      font-size: 2rem;
      margin-left: 0.5rem;
    }
  }

  p.division {
    margin: 1rem 0;
    color: ${({ theme }) => theme.color.white};
  }

  section.sign-aside {
    z-index: -999;
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 0;
    background-size: cover;
    filter: grayscale(100%);
  }

  section.sign-aside.sign-up {
    right: 0;
    background-image: url('https://images.unsplash.com/photo-1565025522027-650a1a2dac35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2464&q=80');
  }

  section.sign-aside.sign-in {
    left: 0;
    background-image: url('https://images.unsplash.com/photo-1565025522027-650a1a2dac35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2464&q=80');
  }

  & .sign:hover {
    .sign-aside {
      filter: none;
      transform: scale(1, 1) rotate(0deg) !important;
      transition: all 0.35s;
    }
  }
`

export const SignSection = styled.section`
  ${({ theme }) => theme.display.flexCenterCol};
  text-align: center;
`
