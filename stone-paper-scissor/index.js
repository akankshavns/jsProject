let randomNumber;
let computerChoise;
let userChoise;
function computerOption(){
    randomNumber = Math.random()*3;

if (randomNumber > 0 && randomNumber <= 1){
    computerChoise = 'stone';
    console.log('computer choise is stone');

}else if(randomNumber > 1 && randomNumber <=2){
    computerChoise = 'paper';
    console.log('computer choise is paper');
}else {
    computerChoise = 'scissor';
    console.log('computer choise is scissor');
}
}



function stoneClick() {
    computerOption();
    if (computerChoise === 'stone'){
        alert('computer choose stone so match is TIE');
    }else if(computerChoise === 'paper'){
        alert('computer choose paper so computer WIN the match');
    }else{
        alert('computer choose scissor so user WIN the match');
    }
}

function paperClick() {
    computerOption();
    if (computerChoise === 'stone'){
        alert('computer choose stone so user Won the match');
    }else if(computerChoise === 'paper'){
        alert('computer choose paper so match is TIE');
    }else{
        alert('computer choose scissor so computer WIN the match');
    }
}

function stoneClick() {
    computerOption();
    if (computerChoise === 'stone'){
        alert('computer choose stone so match is TIE');
    }else if(computerChoise === 'paper'){
        alert('computer choose paper so computer WIN the match');
    }else{
        alert('computer choose scissor so user WIN the match');
    }
}

function scissorClick() {
    computerOption();
    if (computerChoise === 'stone'){
        alert('computer choose stone so computer WIN the match');
    }else if(computerChoise === 'paper'){
        alert('computer choose paper so user WIN the match ');
    }else{
        alert('computer choose scissor so  match is TIE ');
    }
}