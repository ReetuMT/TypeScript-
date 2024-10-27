import { Input } from "../Input"

type InputProps = React.ComponentProps<'input'>
export const CustomInput=(props:InputProps)=>{
    return(
        <input {...props}/>
    )
}