import React, { useState } from 'react'

const TestPage = () => {
  const [state, setState] = useState<any>({
    fileName: [],
    images: [],
    preview: [],
  })

  const handleFile = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const files = target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.readAsDataURL(files[i])

        // reader가 file을 읽어온 다음 바디의 내용이 실행됩니다.
        reader.onloadend = () => {
          let concatName: string[] = []
          let concatFile: any[] = []
          let concatPreview: any[] = []
          concatName = [...concatName, files[i].name]
          concatFile = [
            ...concatFile,
            {
              data: files[i],
              description: '',
              type: 'content',
            },
          ]
          concatPreview = [
            ...concatPreview,
            {
              url: reader.result, // 이미지파일의 임시 url은 reader의 result 속성에 담겨있습니다
              description: '',
            },
          ]
          setState({
            fileName: [...state.fileName, ...concatName],
            images: [...state.images, ...concatFile],
            preview: [...state.preview, ...concatPreview],
          })
          console.log(`state>>`, state)
        }
      }
    }
  }

  // 서버에 파일 전송
  const handleSubmit = () => {
    // 보낼 데이터를 만듭니다
    const data = {
      images: state.images,
    }
    // json 형태로 전송합니다
    const jsonData = JSON.stringify(data)
    // 폼데이터를 생성합니다
    const formData = new FormData()
    // jsonData를 `data`라는 키의 값으로 formData에 append 합니다
    formData.append('data', jsonData)
    console.log(`state.images >>`, state.images)
  }

  return (
    <>
      <div>test page for formdata</div>
      <form method='post' encType='multipart/form-data'>
        <input
          id='fileInput'
          type='file'
          accept='image/*'
          onClick={handleFile}
        />
        <label htmlFor='fileInput'>
          <h1>input image</h1>
        </label>
      </form>
      <div>
        {state.preview.map((el: any, idx: number) => (
          <img
            src={el.url}
            key={idx}
            alt='preview'
            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default TestPage
