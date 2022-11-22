import "../css/DeleteComponentButton.css"

import { ReactComponent as TrashCan } from "../svg/trash-can.svg"

const DeleteComponentButton = () => {
    return (
        <button className="delete-button">
            <TrashCan className="delete-icon" />
        </button>
    );
}

export default DeleteComponentButton