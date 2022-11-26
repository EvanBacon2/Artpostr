import { useState, useEffect } from 'react'

import BasicComponent from "../js/BasicComponent.js"
import AddComponentButton from "../js/AddComponentButton.js"

import "../css/BasicComponentGroup.css"

const BasicComponentGroup = ({ type }) => {
    const [componentCount, setComponentCount] = useState(1)
    const [componentList, setComponentList] = useState([<BasicComponent type={type} />])

    return (
        <div className="basic-component-group">
            <h1 className="group-title">{type}</h1>
            <div className="component-list">
                {componentList}
            </div>
            <AddComponentButton type={type} />
        </div>
    );
}

export default BasicComponentGroup