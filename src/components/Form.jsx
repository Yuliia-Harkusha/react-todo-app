import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export const Form = ({ todos, setTodos, edit, setEdit }) => {
  const [input, setInput] = useState('');

  const updateTodo = ({ id, text, completed }) => {
    const newTodo = todos.map(todo => {
      return todo.id === id ? { id, text, completed } : todo;
    });
    setTodos(newTodo);
    setEdit('');
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.text);
    } else {
      setInput('');
    }
  }, [setInput, edit]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!edit) {
      setTodos([{ id: nanoid(), text: input, completed: false }, ...todos]);
      setInput('');
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100%',
          mt: 4,
          mb: 4,
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Enter the task here"
          size="small"
          type="text"
          name="todo"
          color="secondary"
          sx={{
            maxWidth: '800px',
          }}
          value={input}
          onChange={handleChange}
        />
        <Button
          disableElevation
          variant="contained"
          size="small"
          sx={{
            p: 1,
            ml: 2,
            bgcolor: 'primary.main',
            color: 'primary.lightText',
            '&:hover': {
              bgcolor: 'primary.accent',
            },
          }}
          onClick={handleSubmit}
        >
          {edit ? 'OK' : 'Add'}
        </Button>
      </Box>
    </div>
  );
};
