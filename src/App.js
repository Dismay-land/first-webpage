import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';


const  App = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [outputSerch, setOutputSearch] = useState('');
  const name = 'Dima'

  const handleButtonClick = () => {
    setOutputSearch(inputSearch);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          My new web
        </div>

        <div>
          <Input 
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Type somethin'"
          key='inputSearch' 
          variant="contained" style={{
            width: '300px',
            marginTop: '20px',
            height: '50px',
            fontSize: '20px',
            color: 'white',
            backgroundColor: 'blue',
          }}>type somthing</Input>
        </div>

        <div style={{
          marginTop: '20px',
        }}>

        
          <Button variant="contained" 
            onClick={handleButtonClick}
          >OK</Button>
        </div>

        <div style={{
          marginTop: '40px'
        }}>
         you typed '{outputSerch}'  {' :)'}
        </div>

       
      </header>
    </div>
  );
}

export default App;
