import { useState, useEffect, useRef } from 'react'

import "../css/InputField.css"

const TagInput = ({ tagKey, tagValue, onChange, onSubmit }) => {
    const [width, setWidth] = useState(0)
    const span = useRef()

    useEffect(() => {
        setWidth(span.current.offsetWidth);
    }, [tagValue])

    const onC = (e) => {
        onChange(tagKey, e.target.value)
    }

    const onS = (e) => {
        console.log(e.target.value)
        onSubmit(tagKey, e.target.value)
    }

    return (
        <>
            <span id="width-ref" className="input-field tag" ref={span}>{tagValue}</span>
            <input type="text" className="input-field tag" style={{ width }}
                value={tagValue} onChange={onC} onBlur={onS} />
        </>
    );
}

export default TagInput