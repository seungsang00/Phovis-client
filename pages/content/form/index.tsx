import { useState } from 'react'
import { AddTagsSection } from '@containers/AddTagsSection'

interface ITag {
  id: string
  name: string
}

const Form = () => {
  const [tagList, setTagList] = useState<(null | ITag)[]>([])

  return (
    <>
      <section>
        <AddTagsSection tagList={tagList} setTagList={setTagList} />
      </section>
    </>
  )
}

export default Form
