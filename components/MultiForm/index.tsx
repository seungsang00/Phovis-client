import { StyledForm } from './multiform.style'

const MultiForm = ({ handleFile }: any) => {
  return (
    <StyledForm method='post' encType='multipart/form-data'>
      <input
        id='fileInput'
        type='file'
        accept='image/*'
        onChange={handleFile}
        style={{ display: 'none' }}
      />
      <label htmlFor='fileInput'>
        <div title='클릭해서 사진을 추가할 수 있어요'></div>
      </label>
    </StyledForm>
  )
}

export default MultiForm
