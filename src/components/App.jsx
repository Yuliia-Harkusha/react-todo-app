import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import { Header } from './Header';
import { Form } from './Form';
import { TodoList } from './TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </ThemeProvider>
  );
};
