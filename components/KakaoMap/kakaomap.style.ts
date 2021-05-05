import styled from '@styles/themed-components'

export const MapContainer = styled.div`
  width: 400px;
  height: 400px;

  & div.bAddr {
    font-size: 0.8rem;
    border-radius: 0.2rem;
    padding: 0.5rem;
    /* width: 17rem !important; */
    height: fit-content !important;
    width: 10rem !important;
    height: 3rem;

    & span.title {
      color: ${({ theme }) => theme.color.secondary} !important;
      font-weight: 600;
    }
  }
`

export const Input = styled.input`
  font-size: 1.2rem;
  font-weight: 600;
  width: 400px;
  height: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.primary} !important;
`
