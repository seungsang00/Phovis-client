import styled from '@styles/themed-components'

export const SettingContainer = styled.section`
  width: 90%;

  .profile-title {
    padding-bottom: 30px;
    border-bottom: 1px solid #2c2d33;
    margin-bottom: 40px;
    font-size: 2.5rem;

    .username {
      font-weight: 500;
    }
  }

  .profile-form-area {
    width: 100%;
    position: relative;
    font-size: 1.25rem;
    display: grid;
    grid-template-columns: 370px 1fr;
  }

  .signout-button-area {
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;
  }
`

export const EditPassword = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;

  & button {
    font-size: 0.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.color.secondary};
  }
`
