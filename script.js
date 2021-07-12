const calculator = document.querySelector('.calculator'), 
      keys = calculator.querySelector('.keys')


keys.addEventListener('click', (e) => {

  const key = e.target
  const action = key.dataset.action

  if(key.matches('button')) {
// 
    }
    if(!action) {
      console.log('number key')
    }
  })