import { useRef } from 'react'

import "../css/InputField.css"

const TagInput = ({ tagKey, onSubmit }) => {
    const span = useRef()

    const onS = () => {
        onSubmit(tagKey, span.current.textContent)
    }

    const onKD = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            onS()
            span.current.blur()
        }
    }

    return (
        <span className="input-field tag" ref={span} contentEditable="true" onBlur={onS} onKeyDown={onKD}></span>
    );
}

export default TagInput