import React from 'react';
import TaskCard from './TaskCard';

const TaskBoard = ({ tasks, openModal, onDeleteTask, setTasks }) => {
  
  const changeTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
  };

  return (
    <div className="task-board">
      {['TODO', 'IN PROGRESS', 'COMPLETED'].map(status => (
        <div key={status} className={`column ${status.toLowerCase().replace(' ', '-')}`}>
          <h2>{status}</h2>
          {tasks.filter(task => task.status === status).map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onEdit={() => openModal(task)} 
              onDelete={onDeleteTask} 
              changeStatus={changeTaskStatus}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
