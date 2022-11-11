import React, { useState } from 'react';

const Task = ({task}) => {
    const [complete, setComplete] = useState(false);

    const handleClick = () =>  setComplete(!complete);

    return <li className={complete ? "complete" : null} onClick={handleClick}>{task} </li>
};

export default Task;