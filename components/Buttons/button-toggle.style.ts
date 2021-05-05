import styled from '@styles/themed-components'

export const ToggleContainer = styled.div`
  /* max-width: 200px; */
  min-width: 200px;
  height: 100px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span.section-name {
    font-size: 1.25rem;
    font-weight: 500;
    justify-self: flex-end;
  }

  p.section-description {
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
`

export const Toggle = styled.input`
  font-size: 24px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 3em;
  height: 1.5em;
  background: #ddd;
  border-radius: 3em;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  &:checked {
    background: ${({ theme }) => theme.color.secondary};
  }

  &:after {
    position: absolute;
    content: '';
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background: #fff;
    -webkit-box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.3);
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    left: 0;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  &:checked:after {
    left: calc(100% - 1.5em);
  }
`
