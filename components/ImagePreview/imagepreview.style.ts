import styled from '@styles/themed-components'

export const PreviewContainer = styled.div`
  width: 300px;
  height: fit-content;
  padding: 0 1rem;
  margin: 1rem 1rem;
  overflow: hidden;

  background: #fff;
  padding: 1rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-height: 40vh;
    box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);
  }
  input {
    width: 100%;
    height: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.color.primary};
  }
`
