document.getElementById('output').readOnly = true;
let box = document.getElementById('output');
buttons = document.querySelectorAll('button');
let calculatorValue = "";
for(num of buttons){
  num.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    if(buttonText == "="){
      box.value = eval(calculatorValue);
    }
    else if(buttonText == "Clear"){
      calculatorValue = '';
      box.value = calculatorValue;
    }
    else if(buttonText == "^"){
      buttonText = '**';
      calculatorValue += buttonText;
      box.value = calculatorValue;
    }
    else{
      calculatorValue += buttonText;
      box.value = calculatorValue;
    }
  })
}
