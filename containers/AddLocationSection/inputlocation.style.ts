import styled from '@styles/themed-components'

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
  padding-left: 0.8rem;
  color: ${({ theme }) => theme.color.white};

  &:hover::placeholder {
    color: ${({ theme }) => theme.color.secondary};
  }
`

export const LocationDiv = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 100%;
`

export const MapContainer = styled.div`
  width: 500px;
  height: 100%;
`
