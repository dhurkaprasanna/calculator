const calculatorScreen=document.querySelector('.calculator-screen')
const updateScreen=(number) =>{
    calculatorScreen.value=number
}
let prevInout='0'
let calculationOperator=''
let currentInput='0'
const inputNumber=(number)=>{
    if(currentInput==='0'){
        currentInput=number
        console.log(currentInput)
    }
    else{
        currentInput+=number
        console.log(currentInput)
    }
}
const numbers=document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener(("click"),(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})
const operators=document.querySelectorAll(".operator")
operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
       inputOperator(event.target.value)
    })
})
const inputOperator=(operator)=>{
    prevInput=currentInput
    calculatorOperator=operator
    currentInput='0'
}

const equalSign=document.querySelector('.equal-sign')
equalSign.addEventListener('click',()=>{
    calculate()
    updateScreen(currentInput)
})
const clear=document.querySelector('.all-clear')
clear.addEventListener('click',()=>{
    calculatorScreen.value='0'
    currentInput='0'
    prevInput='0'

})
const calculate=()=>{
    let result=0
    switch(calculatorOperator){
        case '+':
            result=parseFloat(prevInput)+parseFloat(currentInput)
            break;
            case '-':
            result=parseFloat(prevInput)-parseFloat(currentInput)
            break;
            case '*':
            result=parseFloat(prevInput)*parseFloat(currentInput)
            break;
            case '/':
            result=parseFloat(prevInput)/parseFloat(currentInput)
            break;
            case '%':
            result=parseFloat(prevInput)%parseFloat(currentInput)
            break
            default:
                return
    }
    currentInput=result.toString()
    calculationOperator=''
}