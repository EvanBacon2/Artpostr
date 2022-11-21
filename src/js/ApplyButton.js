import { useState } from 'react';

import ReplyButton from "../js/ReplyButton.js"
import SiteIcon from "../js/SiteIcon.js"

import "../css/SiteButton.css"
import "../css/ApplyButton.css"

const ApplyButton = ({ site }) => {
    const [clicked, setClicked] = useState(false)

    const onClick = () => {
        setClicked(!clicked)
    }

    return (
        <button className={`site-button apply-button ${site} ${clicked}`} onClick={onClick}>
            <SiteIcon site={site} className="apply-icon" />
            <ReplyButton site={site} active={clicked ? "active" : ""} />
        </button>
    );
}

export default ApplyButton