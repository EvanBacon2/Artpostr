import { useState } from 'react'

import BasicComponent from "../js/BasicComponent.js"
import AddComponentButton from "../js/AddComponentButton.js"

import "../css/BasicComponentGroup.css"

const BasicComponentGroup = ({ type }) => {
    const deleteComponent = (key) => {
        setComponentList((prevList) => {
            if (prevList.size > 1) { 
                const newList = new Map(prevList)
                newList.delete(key)
                return newList
            } else 
                return prevList
        })
    }

    const createComponent = (key) => {
        return <BasicComponent key={key} compKey={key} type={type} deleteComponent={deleteComponent} />
    }

    const [componentKey, setComponentKey] = useState(0)
    const [componentList, setComponentList] =
        useState(new Map([[componentKey, createComponent(componentKey)]]))

    const addComponent = () => {
        setComponentList((prevList) => {
            const newList = new Map(prevList)
            newList.set(componentKey + 1, createComponent(componentKey + 1))
            return newList
        })
        setComponentKey(componentKey + 1)
    }

    return (
        <div className="basic-component-group">
            <h1 className="group-title">{type}</h1>
            <div className="component-list">
                {[...componentList.values()]}
            </div>
            <AddComponentButton type={type} onClick={addComponent} />
        </div>
    );
}

export default BasicComponentGroup