import React, { useState } from 'react';
import { ThemeProvider, Container } from '@mui/material';
import { theme } from './Theme';
import { Header } from './Header';
import { Form } from './Form';
import { TodoList } from './TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </ThemeProvider>
  );
};
