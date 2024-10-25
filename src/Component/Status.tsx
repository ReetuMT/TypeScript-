import React from 'react'

type StatusProps={
    status:string
}
export const Status = (props:StatusProps) => {
    let message
    if(props.status == 'loading'){
        message='Loading.....'
    }else if(props.status == 'error'){
        message='Error Fetching Data'
    }else if(props.status === 'success'){
        message = 'Data fetched successfully'
    }
  return (
    <div>
      {message}
    </div>
  )
}


