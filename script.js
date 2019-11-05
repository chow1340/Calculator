


class Calculator {
    constructor(prevNumTextElement,curNumTextElement){
        this.prevNumTextElement = prevNumTextElement;
        this.curNumTextElement = curNumTextElement;
        
    }

    clear(){
        this.prevNum = '';
        this.curNum = '';
        this.operator = undefined;
    }

    delete(){

    }
    
    appendNumber(number){
       if (number === '.' && this.curNum.includes('.')) return
       this.curNum = this.curNumTextElement.innerText.toString()+number.toString()
       /* this.curNum = this.curNum.toString() + number.toString() */
        
    }

    chooseOperation(operation){
        this.operation = operation;
    }
    updateDisplay(){
        this.curNumTextElement.innerText = this.curNum

    }

    compute(){

    }
}




const numbers = document.querySelectorAll('[data-number]')
const operator = document.querySelectorAll('[data-operator')
const equals = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clear = document.querySelector('[clear]')
const prevNumTextElement = document.querySelector('[data-prevNum]')
const curNumTextElement = document.querySelector('[data-curNum')



const calculator = new Calculator (prevNumTextElement, curNumTextElement); // Create a new object with the same parameters as 'Calculator'

numbers.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})


operator.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })

})






/*
const calculator = new Calculator (prevNumTextElement, curNumTextElement)

numbers.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })

*/
