import styled from 'styled-components'

export const PhotoCardPreviewContainer = styled.div``
export const PhotoContainer = styled.div`
  break-inside: avoid;
  width: 100%;
  height: 100%;
`
export const PhotoCardPreview = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  min-width: 320px;
  &:hover {
    & > div.PhotocardPreviewInfo {
      display: flex;
    }
  }
  & > div.PhotocardPreviewInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding-bottom: 1.6rem;
    text-align: left;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.95;
    z-index: -999;
  }
`

export const DscriptionContainer = styled.div`
  padding-left: 5px;
  padding-top: 2px;
  font-size: 1rem;
  align-content: center;
  text-align: left;
  position: relative;
`
