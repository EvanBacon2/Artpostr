import "../css/AddComponentButton.css"

const AddComponentButton = ({ type, onClick }) => {
    return (
        <button className="add-component" onClick={onClick}>+ {type}</button>
    );
}

export default AddComponentButton