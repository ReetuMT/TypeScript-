import React from 'react'

type WelcomeProps={
    name:string
    messageCounter?:number
    isLoggedIn:boolean
}
export default function Welcome(props:WelcomeProps) {
  const {messageCounter=0}=props
  return (
    <div>
        {
            props.isLoggedIn ? 
            `Welcome ${props.name}🎊🎉..`:
            `Login as  Guest`
        }
      <p>Welcome <strong>{props.name}</strong>🎊🎉.. You Have <strong>{props.messageCounter}</strong> Unread Message</p>
    </div>
  )
}
