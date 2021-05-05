import styled from '@styles/themed-components'
import { view_active, view_inactive } from '../../public/src/icons'

export const InputContainer = styled.div`
  ${({ theme }) => theme.display.flexStartCol};
  margin: 1rem 0;
`

export const Label = styled.label`
  width: 100%;
  text-align: left;
`

export const Input = styled.input`
  color: ${({ theme }) => theme.color.white};
  display: block;
  height: 2rem;
  background-color: transparent;
  padding: 0 0.7rem;

  &:-internal-autofill-selected {
    background-color: transparent !important;
  }
`

export const PasswordContainer = styled.div`
  ${({ theme }) => theme.display.flexStartRow};
`

export const ShowController = styled.span`
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' version='1.1' width='512' height='512' x='0' y='0' viewBox='0 0 461.312 461.312' style='user-select: auto;' xml:space='preserve' class=''%3E%3Cg style='user-select: auto;'%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3Cg style='user-select: auto;'%3E%3Cpath d='M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24 S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576 c0.512-23.04,18.944-41.472,41.472-41.472V208.64z' fill='%234f5b62' data-original='%234f5b62' style='user-select: auto;' class=''/%3E%3C/g%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3Cg style='user-select: auto;'%3E%3Cpath d='M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296 c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12 C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52 s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z' fill='%234f5b62' data-original='%23000000' style='user-select: auto;' class=''/%3E%3C/g%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;

  &:hover {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' version='1.1' width='512' height='512' x='0' y='0' viewBox='0 0 461.312 461.312' style='user-select: auto;' xml:space='preserve' class=''%3E%3Cg style='user-select: auto;'%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3Cg style='user-select: auto;'%3E%3Cpath d='M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24 S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576 c0.512-23.04,18.944-41.472,41.472-41.472V208.64z' fill='%23ff6e40' data-original='%23ff6e40' style='user-select: auto;' class=''/%3E%3C/g%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3Cg style='user-select: auto;'%3E%3Cpath d='M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296 c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12 C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52 s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z' fill='%23ff6e40' data-original='%23000000' style='user-select: auto;' class=''/%3E%3C/g%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3Cg xmlns='http://www.w3.org/2000/svg' style='user-select: auto;'%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  }
`
