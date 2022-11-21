import { useState } from 'react'

import SiteIcon from "../js/SiteIcon.js"

import "../css/SiteButton.css"

const SiteButton = ({ site }) => {
    const [clicked, setClicked] = useState(false)

    const onClick = () => {
        setClicked(!clicked)
    }

    return (
        <button className={`site-button ${site} ${clicked}`} type="button" onClick={onClick}>
            <SiteIcon site={site} className="site-icon" />
        </button>  
    );
}

export default SiteButton