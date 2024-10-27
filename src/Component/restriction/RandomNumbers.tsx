type RandomNumbersProps={
    value:number
    isPositive?:boolean
    isNegative?:boolean
    isZero?:boolean
}

type RandomNumbersType={
    value:number
    // isNegative?:never
    // isZero?:never
}
type positiveNumber=RandomNumbersType & {
    isNegative:boolean
    isPositive?:never
    isZero?:never
} 
type NegativeNumber = positiveNumber & {
    isNegative :boolean
    isPositive?:never
    isZero?:never
}
type Zero = NegativeNumber & {
    isZeor :boolean
    isPositive?:never
    isNegative?:never
}
// type RandomNumbersProps= positiveNumber | NegativeNumber | Zero
export const ReandomNumber=({
    value,isPositive,isNegative,isZero
}:RandomNumbersProps)=>{
    return(
        <div>{value}{isPositive && 'positive' } {isNegative && 'negative'}{''}
        {isZero && 'zero'}</div>
    )
}