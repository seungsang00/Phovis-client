import React, { useState } from 'react'
import { TagSmall } from '@components/index'
import { TagSection, TagTooltip } from './addtags.style'
import { Tag } from '@interfaces'

interface IProps {
  locationTag: string | undefined
  tagList: Tag[]
  setTagList: (tags: Tag[]) => void
  deleteTag: (tags: Tag[]) => void
}

export const AddTagsSection = ({
  locationTag,
  tagList,
  setTagList,
  deleteTag,
}: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      const newTag = {
        id: value,
        name: value,
      }

      if (!tagList.find((tag: any) => tag.id === value)) {
        setTagList([newTag])
      }
      setValue('')
    }
  }

  const handleClick = (key: string) => {
    const filteredTags = tagList.filter((tag: any) => tag.name !== key)
    deleteTag(filteredTags)
  }

  return (
    <>
      <TagSection>
        {tagList[0] &&
          tagList[0].id &&
          tagList.map((tag: any) => (
            <TagSmall
              key={tag.name}
              tagname={tag.name}
              onClick={() => handleClick(tag.name)}
            />
          ))}
        {locationTag && (
          <TagSmall
            key='location_tag'
            tagname={locationTag}
            onClick={() => console.log(locationTag)}
          />
        )}
        <input
          type='text'
          placeholder='태그를 입력하세요'
          value={value || ''}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          onChange={onChange}
          onKeyDown={handleAdd}
        />
        {value === '' && isOpen && (
          <TagTooltip>
            엔터키를 입력하여 태그를 등록할 수 있습니다.
            <br />
            등록된 태그를 클릭하면 태그가 삭제됩니다.
          </TagTooltip>
        )}
      </TagSection>
    </>
  )
}
