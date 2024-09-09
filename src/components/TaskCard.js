import React from 'react';

const TaskCard = ({ task, onEdit, onDelete, changeStatus }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Date:</strong> {task.date}</p>
      
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>

      <select value={task.status} onChange={(e) => changeStatus(task.id, e.target.value)}>
        <option value="TODO">TODO</option>
        <option value="IN PROGRESS">IN PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
    </div>
  );
};

export default TaskCard;
