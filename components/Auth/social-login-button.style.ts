import styled from '@styles/themed-components'

export const SocialButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border-radius: 999px;
  color: ${({ theme }) => theme.color.white};
  border: 1.2px solid ${({ theme }) => theme.color.white};
  cursor: pointer;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    border: 1.2px solid ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.primary};
  }
`

export const SignButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border-radius: 999px;
  color: ${({ theme }) => theme.color.secondary};
  border: 1.2px solid ${({ theme }) => theme.color.secondary};
  cursor: pointer;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.secondary};
  }
`
