import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// Creates the form to add or edit tasks
export default function TaskForm({ onAdd, onUpdate, editingTask }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDesc(editingTask.desc);
    } else {
      setTitle('');
      setDesc('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = { title, desc };

    if (editingTask) {
      onUpdate({ ...editingTask, ...newTask });
    } else {
      onAdd(newTask);
    }

    setTitle('');
    setDesc('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group>
        <Form.Label>Task Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter description"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        {editingTask ? 'Update Task' : 'Add Task'}
      </Button>
    </Form>
  );
}
