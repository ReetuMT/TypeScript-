import React from 'react';
import { Status } from './Status';
import { Heading } from './Heading';
import { Family } from './Family';
import { Button } from './Button';
import { Input } from './Input';
import Person from './Person';
import { Name } from './Peerson.types';
import { LoggedIn } from './State/LoggedIn';
import User from './State/User';
import User2 from './State/User2';
import { Counter } from './State/Counter';

type FamilyList = {
  names: Name[];
};

const personName = {
  first: 'Renu',
  last: 'Tambre',
};

const PersonList: React.FC<FamilyList> = (props) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '20px',
      }}
    >
      {/* Basic Props Section */}
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>---------Basic Props----------</h3>
        <Person name={personName} />
        <h4>Family Members</h4>
        <ol>
          {props.names.map((name) => (
            <li key={name.first}>
              {name.first} {name.last}
            </li>
          ))}
        </ol>
      </div>

      {/* Advanced Props Section */}
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>---------Advanced Props----------</h3>
        <Status status="loading" />
        <Heading>In my family👨‍👩‍👦‍👦....We are 5 Members</Heading>
        <Family>
          <Heading>Sweetest Family</Heading>
        </Family>
      </div>

      {/* Event Props Section */}
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>---------Event Props----------</h3>
        <Button
          handleClick={(event, id) => {
            console.log('Button Clicked', event, id);
          }}
        />
        <Input value="" hnadleChange={(event) => console.log(event)} />
      </div>
      {/* Use state Section */}
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
         <h3>---------UseState----------</h3>
       <LoggedIn/>
      </div>
       {/* Usestate Value Section */}
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
         <h3>---------UseState value----------</h3>
       <User/>
      </div>
      {/* Usestate Type asserion Section */}
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
         <h3>--UseState Type Assertion----</h3>
       <User2/>
      </div>
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
         <h3>-------UseReducer Hook------</h3>
       <Counter/>
      </div>
    </div>
  );
};

export default PersonList;
