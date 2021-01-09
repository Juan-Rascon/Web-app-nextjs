import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../src/Link';

export default function About() {
  return (
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-alpha example
        </Typography>
        <Button variant="contained" component={Link} naked href="/">
          Go to the main page
        </Button>
      </Box>
  );
}