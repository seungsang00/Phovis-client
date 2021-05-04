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
`
