let again=document.querySelector('.btn-again');
let check=document.querySelector('.btn-check');
let message=document.querySelector('.message');
let score=document.querySelector('.score').value;
let highscore=document.querySelector('.highscore').value;
let guessNum=document.querySelector('.box');
let inputNum=document.querySelector('.input');
let body=document.querySelector('body');
let scoreNum=document.querySelector('.score-num');
let highscoreNum=document.querySelector('.highscore-num');

guessNum=Math.floor((Math.random() * 20) + 1);

score=20;
highscore=0;
check.addEventListener('click',function(event){

    event.defaultPrevented;

   // console.log('success');
   
    if(inputNum.value==guessNum){
        scoreNum.innerHTML=score;
        message.innerHTML='👏 Correct Number';
        body.style.backgroundColor='green';
        inputNum.style.backgroundColor="green";
        if(score===20){
            
            highscoreNum.innerHTML=score;
           
        }
        else if(score< highscore){
            highscoreNum.innerHTML=highscore;
        }
        else{
            highscoreNum.innerHTML=score;

        }
        highscore=score;
    
     
      
        
    }
    if(inputNum.value < guessNum){
        message.innerHTML=" 📈 Too Low...";
        score=score-1;
        scoreNum.innerHTML=score;
        console.log(highscore);

    
      

    }
    if(inputNum.value > guessNum){
        message.innerHTML=" 📉 Too High...";
        score=score-1;
        scoreNum.innerHTML=score;
      
       
    }
})
again.addEventListener('click',function(){
    score=20;
    guessNum=Math.floor((Math.random() * 20) + 1);
   
    body.style.backgroundColor="rgba(0,0,0,0.8)";
    inputNum.style.backgroundColor="transparent";
    inputNum.value='';
    message.innerHTML="start guessing...";
    scoreNum.innerHTML=score;
    console.log(score);
    console.log(highscore);
   
    
 
})