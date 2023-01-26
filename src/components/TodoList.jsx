import React from 'react';
import { Box, List, ListItem, TextField, Button } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

export const TodoList = ({ todos, setTodos, setEdit }) => {
  const handleComplete = todo => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find(todo => todo.id === id);
    setEdit(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

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
            {todo.completed ? (
              <Button
                size="small"
                sx={{ mr: 1 }}
                onClick={() => handleComplete(todo)}
              >
                <LibraryAddCheckIcon color="disable" />
              </Button>
            ) : (
              <Button
                size="small"
                sx={{ mr: 1 }}
                onClick={() => handleComplete(todo)}
              >
                <LibraryAddCheckIcon color="secondary" />
              </Button>
            )}

            {todo.completed ? (
              <TextField
                disabled
                fullWidth
                variant="standard"
                type="text"
                size="small"
                value={todo.text}
                sx={{ mr: 1 }}
              />
            ) : (
              <TextField
                fullWidth
                variant="standard"
                type="text"
                size="small"
                color="secondary"
                value={todo.text}
                sx={{ mr: 1 }}
              />
            )}

            <Button size="small" onClick={() => handleEdit(todo)}>
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
