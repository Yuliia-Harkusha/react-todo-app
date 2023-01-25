import React from 'react';
import { Typography, Box } from '@mui/material';

export const Header = () => {
  return (
    <header>
      <Box
        component="div"
        sx={{
          maxWidth: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'primary.main',
          boxShadow: '3',
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{
            p: 2,
            letterSpacing: '0.25rem',
            fontWeight: 'bold',
            color: 'primary.lightText',
          }}
        >
          ToDo List
        </Typography>
      </Box>
    </header>
  );
};
