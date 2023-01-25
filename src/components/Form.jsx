import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export const Form = ({ todos, setTodos }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodos([{ id: nanoid(), text: input, completed: false }, ...todos]);
    setInput('');
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
          mb: 4,
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Enter the task here"
          size="small"
          type="text"
          name="todo"
          color="secondary"
          sx={{
            width: '500px',
          }}
          onChange={handleChange}
          value={input}
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
              bgcolor: 'primary.light',
            },
          }}
        >
          Add task
        </Button>
      </Box>
    </div>
  );
};
