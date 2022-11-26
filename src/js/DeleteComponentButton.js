import "../css/DeleteComponentButton.css"

import { ReactComponent as TrashCan } from "../svg/trash-can.svg"

const DeleteComponentButton = ({ compKey, deleteComponent }) => {
    return (
        <button className="delete-button" onClick={() => deleteComponent(compKey)}>
            <TrashCan className="delete-icon" />
        </button>
    );
}

export default DeleteComponentButton