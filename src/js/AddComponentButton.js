import "../css/AddComponentButton.css"

const AddComponentButton = ({ type }) => {
    return (
        <button className="add-component">+ {type}</button>
    );
}

export default AddComponentButton