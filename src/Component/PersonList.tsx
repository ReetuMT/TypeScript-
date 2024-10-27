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
import { ThemeContextProvider } from './context/ThemeContext';
import Box from './context/Box';
import { UserContextProvider } from './context/UseContext';
import Users from './context/Users';
import { MutableRef } from './ref/MutableRef';
import { DemoRef } from './ref/DemoRef';
import { Count } from './Class/Count';
import { Private } from './auth/Private';
import { Profile } from './auth/Profile';
import List from './genertics/List';
import { ReandomNumber } from './restriction/RandomNumbers';
import { Toast } from './TemplateLiterals/Toast';
import { CustomButton } from './html/Button';
import CustomComponent from './html/CustomComponent';
import { Text } from './ploymorphic/text';

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
        <LoggedIn />
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
        <User />
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
        <User2 />
      </div>
      {/* Use Reducer Hook*/}
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-------UseReducer Hook------</h3>
        <Counter />
      </div>
      {/* UseContext Hook */}
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-------UseContext Hook------</h3>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-------UseContext Hook------</h3>
        <UserContextProvider>
          <Users />
        </UserContextProvider>
      </div>
      {/* UseRef and UseEffect Hook */}
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-------Use Ref Hook------</h3>
        <MutableRef />
      </div>
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-------Class Componet------</h3>
        <Count message='Number of Peoples' />
      </div>
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-------Component App------</h3>
        <Private isLoggedIn={true} component={Profile} />
      </div>
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-------Generics Props------</h3>
        <List items={['Banana', 'Apple', 'Mango']} onClick={(item) => console.log(item)} />
        <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      </div>
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-------Restricting Props------</h3>
        <ReandomNumber value={10} isPositive />
      </div>
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>--Template Literals and Exclude Props--</h3>
        <Toast position="left-top" />
        <Toast position="right-bottom" />
        <Toast position="center-top" />

      </div>
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-Wrapping HTML Element--</h3>
        <CustomButton variant="primary" onClick={()=>console.log("Clicked")}>Primary Button</CustomButton>


      </div>
      <div
        style={{
          border: '2px solid black',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        <h3>-Polymorphic Component--</h3>
        <Text as='label' htmlFor='someId' size='sm' color='secondary'>Lable</Text>
        <Text as='h1' size='md' >Paragraph</Text>
        <Text as='p' size='lg'>Heading</Text>


      </div>
    </div>
  );
};

export default PersonList;
