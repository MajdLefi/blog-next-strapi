import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
  <footer>
    <Box className='w-full h-10 bg-blue-600'>
      <Typography variant='h6' sx={{ color: 'white', textAlign: 'center', pt: '5px' }}>© {new Date().getFullYear()} Tech Blog </Typography>
    </Box>
  </footer>
  );
};
