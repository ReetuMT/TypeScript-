import React from 'react'
import PropTypes from 'prop-types'
import Welcome from '../Welcome'

const CustomComponent = (props:React.ComponentProps<typeof Welcome>)=> {
  return (
    <div>
        {props.name}      
    </div>
  )
}


export default CustomComponent
