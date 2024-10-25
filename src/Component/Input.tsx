type InputProps={
    value:string
    hnadleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}
export const Input=({value,hnadleChange}:InputProps)=>{
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(event);
        
    }
    return (
        <input type="text" onChange={hnadleChange} value={value}/>
    )
}