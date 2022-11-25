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

    const handleInput = (e) => {
        console.log(span.current.textContent)
    }

    const handlePaste = (e) => {
        e.preventDefault()

        let text = (e.clipboardData || window.clipboardData).getData('text');
        text = text.replaceAll(/(\r\n|\n|\r)/gm, '')
  
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(text));
        selection.collapseToEnd();
    }

    return (
        <span className="input-field tag" ref={span} contentEditable="true"
            onBlur={handleBlur} onKeyDown={handleKeyDown} onInput={handleInput} onPaste={handlePaste}></span>
    );
}

export default TagInput