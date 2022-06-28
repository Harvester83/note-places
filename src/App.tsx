import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained">Contained</Button>

        <Typography variant="h5" gutterBottom component="div">
          h5. Heading
        </Typography>
      </header>
    </div>
  );
}

export default App;
