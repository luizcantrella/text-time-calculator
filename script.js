const testArea = document.querySelector('#test-area');
const originText = document.querySelector('#origin-text p');
const timerElement = document.querySelector('.timer');
const recomecar = document.querySelector('#reset');
let timer = 0;
let isRunning = false;
let seconds = 0;
let milliseconds = 0;
let minutes = 0;
testArea.addEventListener('keypress', (e) => {
  if (!isRunning) {
    isRunning = true;
    const interval = setInterval(()=>{
      timer += 100;
      
      minutes = Math.floor(timer / 1000 / 60);
      seconds = Math.floor(timer / 1000) % 60;
      milliseconds = timer % 1000 / 10;
      timerElement.textContent = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}:${String(milliseconds).padStart(2,'0')}`

      if (testArea.value === originText.textContent) {
        clearInterval(interval)
      }
    }, 100);
  }
});
recomecar.addEventListener('click', (e) => {
  isRunning = false;
  timer = 0;
  testArea.value = '';
  timerElement.textContent = '00:00:00'
})