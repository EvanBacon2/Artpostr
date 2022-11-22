import { useState } from "react"

import TitleInput from "../js/TitleInput.js"
import MultiLineInput from "../js/MultiLineInput.js"
import ApplyButton from "../js/ApplyButton.js"
import DeleteComponentButton from "../js/DeleteComponentButton.js"

import "../css/BasicComponent.css"

/**
 * Creates a component of the given type
 * 
 * Consists of an input field, buttons for selecting which site this component should apply to, 
 * and a button for deleting the component
 * 
 * @param {string} type - the type of component to be created
 */
const BasicComponent = ({ type }) => {
    const [input, setInput] = useState("")
    const [componentCount, setComponentCount] = useState(1)

    const inputCallback = (newInput) => {
        setInput(newInput)
    }

    const inputField = () => {
        switch (type) {
            case "title":
                return <TitleInput inputCallback={inputCallback} />
            case "description":
                return <MultiLineInput inputCallback={inputCallback} />
            case "alt-text":
                return <MultiLineInput inputCallback={inputCallback} />
            default:
                return <div />
        }
    }

    const applyButtons = () => {
        return (
            <>
                {type !== "title" && <ApplyButton site="twitter" />}
                {type !== "tag" && <ApplyButton site="pinterest" />}
                <ApplyButton site="reddit" />
                {type !== "title" && <ApplyButton site="tumblr" />}
            </>
        );
    }

    return (
        <div className='basic-component'>
            <div className="upper-flex">
                <span className="char-count">
                    Remaining Characters - 300
                </span>
            </div>
            {inputField()}
            <div className="lower-flex">
                <div className="apply-flex">
                    {applyButtons()}
                </div>
                <DeleteComponentButton />
            </div>
        </div>
    );
}

export default BasicComponent