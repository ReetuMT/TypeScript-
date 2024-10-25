import React from 'react'
import { PersonType } from './Peerson.types'
const Person = (props:PersonType) => {
  return (
    <div>
      Mother Name is <strong>{props.name.first} {props.name.last}</strong>
    </div>
  )
}

export default Person
