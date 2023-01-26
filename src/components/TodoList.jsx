import React from 'react';
import { Box, List, ListItem, TextField, Button } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

export const TodoList = ({ todos, setTodos }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleComplete = ({ id }) => {};

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <List
        sx={{
          width: '100%',
        }}
      >
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            disableGutters
          >
            <Button
              size="small"
              sx={{ mr: 1 }}
              onClick={() => handleComplete(todo)}
            >
              <LibraryAddCheckIcon color="secondary" />
            </Button>
            <TextField
              variant="standard"
              type="text"
              size="small"
              color="secondary"
              value={todo.text}
              sx={{ mr: 1 }}
              onChange={e => e.preventDefault()}
            />
            <Button size="small">
              <ModeEditIcon color="secondary" />
            </Button>
            <Button size="small" onClick={() => handleDelete(todo)}>
              <DeleteForeverIcon color="secondary" />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
