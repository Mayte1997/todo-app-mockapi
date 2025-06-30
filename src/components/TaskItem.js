import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

// Creates the task item
export default function TaskItem({ task, onDelete, onEdit }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{task.title}</strong>: {task.desc}
      </div>
      <div>
        <Button variant="warning" size="sm" onClick={() => onEdit(task)} className="me-2">Edit</Button>
        <Button variant="danger" size="sm" onClick={() => onDelete(task.id)}>Delete</Button>
      </div>
    </ListGroup.Item>
  );
}
