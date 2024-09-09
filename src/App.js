import './App.css';
import React, { useState } from 'react';
import TaskBoard from './components/TaskBoard';
import TaskModal from './components/TaskModal';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Brainstorming', description: 'Team brainstorm', date: '18/09/2024', status: 'TODO', priority: 'High' },
    { id: 2, title: 'Wireframes', description: 'Create wireframes', date: '18/09/2024', status: 'TODO', priority: 'High' },
    { id: 3, title: 'Onboarding Illustrations', description: 'Design illustrations', date: '18/10/2024', status: 'IN PROGRESS', priority: 'Low' },
    { id: 4, title: 'Design System', description: 'Update design system', date: '12/10/2024', status: 'COMPLETED', priority: 'Medium' }
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const openModal = (task = null) => {
    setEditTask(task);
    setModalOpen(true);
  };

  return (
    <div className="App">
      <h1>Desktop & Mobile Application</h1>
      <button onClick={() => openModal()}>Create Task</button>
      <TaskBoard 
        tasks={tasks} 
        openModal={openModal} 
        onDeleteTask={handleDeleteTask} 
        setTasks={setTasks}
      />
      {isModalOpen && (
        <TaskModal
          task={editTask}
          onClose={() => setModalOpen(false)}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default App;

