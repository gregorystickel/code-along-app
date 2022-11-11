import React, { useState }from "react";

const Form = ({addTask}) => {
    const [userInput, setUserInput] = useState("");
    const handleChange = (e) => setUserInput(e.target.value);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput(addTask);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange} />
            <button>Add</button>
        </form>
    )
};

export default Form;