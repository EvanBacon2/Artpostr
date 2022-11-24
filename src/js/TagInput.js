import { useRef } from 'react'

import "../css/InputField.css"

const TagInput = ({ tagKey, onSubmit }) => {
    const span = useRef()

    const handleBlur = () => {
        onSubmit(tagKey, span.current.textContent)
    }

    const handleKeyDown = (e) => {
        if (e.key == 'Enter') {
            e.preventDefault()
            handleBlur()
            span.current.blur()
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        let text = e.clipboardData.getData('text')
        text = text.replaceAll(/(\r\n|\n|\r)/gm, '')
        span.current.textContent = text
    }

    return (
        <span className="input-field tag" ref={span} contentEditable="true"
            onBlur={handleBlur} onKeyDown={handleKeyDown} onPaste={handlePaste}></span>
    );
}

export default TagInput