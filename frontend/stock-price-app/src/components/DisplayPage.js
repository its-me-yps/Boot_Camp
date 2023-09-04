import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const DisplayPage = ({ jsonData, resetPage }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Stock Data
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={3} className="container mt-5 p-4">
        <Typography variant="h4" gutterBottom>
          Stock Data
        </Typography>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Property</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(jsonData).map(([property, value]) => (
              <tr key={property}>
                <td>{property}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button
          onClick={resetPage}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Go Back
        </Button>
      </Paper>
    </div>
  );
};

export default DisplayPage;
