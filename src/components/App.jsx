import React, { useState, useEffect } from 'react';
import { ThemeProvider, Container } from '@mui/material';
import { theme } from './Theme';
import { Header } from './Header';
import { Form } from './Form';
import { TodoList } from './TodoList';

export const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(initialState);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Form todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit} />
        <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
      </Container>
    </ThemeProvider>
  );
};
