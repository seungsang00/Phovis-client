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
      <label htmlFor='fileInput'>+🖼</label>
    </StyledForm>
  )
}

export default MultiForm
