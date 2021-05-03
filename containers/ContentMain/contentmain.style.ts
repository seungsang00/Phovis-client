import styled from '@styles/themed-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 0;

  .section-title {
    margin-bottom: 1rem;
  }

  section {
    width: 100%;
    margin: 1rem 0;
  }

  section.description {
    font-size: 1.2rem;
    line-height: 2rem;
  }

  section.photo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  section.location,
  section.tags {
    /* text-align: left;
    display: flex;
    justify-content: flex-start; */
  }
`
