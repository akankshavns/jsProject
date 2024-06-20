let resultValue ='';
document.querySelector('#result').value = resultValue;

function clear(){
    resultValue = '';
    document.querySelector('#result').value = resultValue;
}

document.querySelector('button').addEventListener("click",clear);

function calculation() {
    let answer;
    answer = eval(resultValue);
    resultValue = answer ; 
    document.querySelector('#result').value = resultValue;
    
}
document.querySelectorAll('button')[23].addEventListener('click',calculation);