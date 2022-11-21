import { useState, useEffect } from "react"

import "../css/ReplyButton.css"

import { ReactComponent as Reply } from "../svg/reply.svg"

const ReplyButton = ({ site, active }) => {
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (!active)
            setClicked(false)
     }, [active])

    const onClick = (e) => { 
        if (active)
            e.stopPropagation()

        setClicked(!clicked)
    }

    return (
        <Reply className={`reply-button ${site} ${active} ${clicked}`} onClick={onClick} />
    );
}

export default ReplyButton