import "../css/InputField.css"

const TitleInput = ({ inputCallback }) => {
    const handleChange = (e) => {
        inputCallback(e.target.value)
    }

    return (
        <input type="text" className="input-field title" onChange={handleChange} />
    );
}

export default TitleInput