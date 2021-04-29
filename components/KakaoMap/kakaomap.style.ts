import styled from '@styles/themed-components'

export const MapContainer = styled.div`
  width: 400px;
  height: 400px;

  & div.bAddr {
    font-size: 0.8rem;
    border-radius: 0.2rem;
    padding: 0.5rem;
    width: 17rem !important;
    height: fit-content !important;

    & span.title {
      font-weight: 600;
    }
  }
`

export const Input = styled.input`
  font-size: 1rem;
  width: 400px;
  height: 2rem;
  margin-bottom: 1rem;
`
