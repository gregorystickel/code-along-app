import React from 'react';
import Task from './Task';

const List = ({tasks}) => {
    const displayTasks = tasks.map((task) => {
        return <Task task={task} />
    })

    return (
        <ul>
           <h2>My List</h2>
           {displayTasks}
        </ul>
    )
};

export default List;