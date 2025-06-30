import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

// The first page of my application: Home page
export default function Home({ tasks, onAdd, onUpdate, onDelete, editingTask, setEditingTask }) {
  return (
    <>
      <TaskForm onAdd={onAdd} onUpdate={onUpdate} editingTask={editingTask} />
      <TaskList tasks={tasks} onDelete={onDelete} onEdit={setEditingTask} />
    </>
  );
}
