type FamilyProps={
    children:React.ReactNode
}
export const Family=(props:FamilyProps)=>{
    return(
        <div>
            {props.children}
        </div>
    )
}