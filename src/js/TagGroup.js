import { useState } from 'react'

import TagInput from "../js/TagInput.js"

import "../css/InputField.css"

const TagGroup = ({ inputCallback }) => {
    const [tagList, setTagList] = useState(new Map([[0, ""]]))
    const [lastTag, setLastTag] = useState(0)

    const onSubmit = (key, value) => {
        if (value === "" && key !== lastTag) {
            setTagList(prevTagList => {
                let newTagList = new Map(prevTagList)
                newTagList.delete(key)
                return newTagList;
            })
        } else if (value !== "" && key === lastTag) {
            setTagList(prevTagList => new Map(prevTagList.set(lastTag + 1, "")))
            setLastTag(lastTag + 1)
        }
    }

    const onChange = (key, value) => {
        setTagList(prevTagList => new Map(prevTagList.set(key, value)))
    }

    const createTags = () => {
        let tags = []
        tagList.forEach((value, key) => tags.push(<TagInput key={key} tagKey={key} tagValue={value} onChange={onChange} onSubmit={onSubmit} />))
        return tags
    }

    return (
        <div className="tag-group">
            {createTags()}
        </div>
    );
}

export default TagGroup