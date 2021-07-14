const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.keys')
const display = calculator.querySelector('.display')


keys.addEventListener('click', (e) => {


  

    if(e.target.matches('button')) {
      const key = e.target
      const action = key.dataset.action
      const keyContent = key.textContent
      const displayedNum = display.textContent




      if(!action) {
        if(displayedNum === '0') {
          display.textContent = keyContent
        }else {
          display.textContent =  keyContent
        }
        console.log(keyContent)
      }
  
      if(action === 'add'|| action === 'subtract' || action === 'multiply' || action === 'divide') {
        console.log('operation')
        key.classList.add('is-depressed')
      }
  
      if (action === 'decimal') {
        console.log('decimal key!')
        display.textContent = displayedNum + '.'
        // displayedNum.textContent = textContent + '.'
      }
      
      if (action === 'clear') {
        console.log('clear key!')
      }
      
      if (action === 'calculate') {
        console.log('equal key!')
      }
    }

  
  })