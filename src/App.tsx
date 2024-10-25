import React from 'react';
import './App.css';
import Welcome from './Component/Welcome';
import Person from './Component/Person';
import PersonList from './Component/PersonList';
import { Status } from './Component/Status';
import { Heading } from './Component/Heading';
import { Family } from './Component/Family';
import { Button } from './Component/Button';
import { Input } from './Component/Input';


function App() {
  
  const familyList=[
    {
      first:'Malatesh',
      last:'Tambre'
    },
    {
      first:'Renu',
      last:'Tambre'
    },
    {
      first:'Reshma',
      last:'Tambre'
    },
    {
      first:'Reetu',
      last:'Tambre'
    },
    {
      first:'Kirti',
      last:'Tambre'
    }
  ]
  return (
    <div className="App">
      <h3>--------------------------TypeScript Topics--------------------------</h3>
      <Welcome name='Reetu' messageCounter={100} isLoggedIn={true} />
      <PersonList names={familyList} />
    </div>
  );
}

export default App;
