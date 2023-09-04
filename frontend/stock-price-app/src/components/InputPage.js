import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const InputPage = ({ fetchDataFromBackend }) => {
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDataFromBackend(companyName);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Stock Price App
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} className="container mt-5 p-4">
        <Typography variant="h4" gutterBottom>
          Enter a Company Name
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: '10px' }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default InputPage;
