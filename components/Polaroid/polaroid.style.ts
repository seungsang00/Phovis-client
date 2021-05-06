import styled from '@styles/themed-components'

export const Wrapper = styled.div`
  display: inline-block;
  margin: 1rem;
  filter: grayscale(100%);
  &:hover {
    filter: none;
    transform: scale(1, 1) rotate(0deg) !important;
    transition: all 0.35s;

    /* TODO: 애니메이션 효과를 추가할 수 있습니다. 시간이 남는다면요. */
  }

  .polaroid {
    background: #fff;
    padding: 0.3rem;
    box-shadow: 0 0.25rem 0.2rem rgba(0, 0, 0, 0.2);

    img {
      height: 300px;
    }
  }
  .caption {
    font-size: 1rem;
    text-align: left;
    line-height: 2em;

    .user-info {
      font-size: 0.85rem;
      font-style: italic;
      color: grey;
    }
  }
`

export const EditButton = styled.button`
  ${({ theme }) => theme.display.flexCenterRow};
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.color.black};
  position: absolute;
  right: 10px;
  bottom: 1px;
  text-align: center;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }
`
