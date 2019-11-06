


class Calculator {
    constructor(prevNumTextElement,curNumTextElement){
        this.prevNumTextElement = prevNumTextElement;
        this.curNumTextElement = curNumTextElement;
        
       
        
    }

    clear(){
        this.prevNumTextElement.innerText = ''; 
        this.curNumTextElement.innerText = '';
        this.operator = undefined;
    }

    delete(){
        this.curNumTextElement.innerText = this.curNumTextElement.innerText.slice(0,-1);
        
    }
    
    appendNumber(number){
       if (number === '.' && this.curNum.includes('.')) return
        this.curNum = this.curNumTextElement.innerText.toString()+number.toString() 
       if (resetNum === true) {
           this.curNum = number;
           resetNum = false
       } 
        
    }

    chooseOperation(operation){
        if (this.curNumTextElement.innerText === '') return 
            
        if (this.prevNumTextElement.innerText !=='') {
            this.compute()
        }
        this.operation = operation;
        this.prevNum = this.curNum + ' ' + ' ' + operation
        this.curNum = ''
        this.prevNumTextElement.innerText = this.prevNum
        this.curNumTextElement.innerText = this.curNum 
        

    }
    updateDisplay(){
        this.curNumTextElement.innerText = this.curNum 

    }

    compute(){
        let computation
        const prev = parseFloat(this.prevNumTextElement.innerText);
        const current = parseFloat(this.curNumTextElement.innerText);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+': 
                computation = prev + current;
                
                
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
            
        }
        
        this.curNum =computation
        this.operation = undefined
        this.prevNumTextElement.innerText = ''
    }

}




const numbers = document.querySelectorAll('[data-number]')
const operator = document.querySelectorAll('[data-operator')
const equals = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clear = document.querySelector('[data-clear]')
const prevNumTextElement = document.querySelector('[data-prevNum]')
const curNumTextElement = document.querySelector('[data-curNum')
var resetNum = false




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
        
        
        
    })

})

equals.addEventListener('click', button => {
    if (button.innerText === '') return 
    calculator.compute();
    calculator.updateDisplay() 
    resetNum = true
})

clear.addEventListener ('click', button => {
    calculator.clear();
    
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
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
