const num1=Math.ceil(Math.random()*100);
const num2=Math.ceil(Math.random()*100);


const questionE1=document.getElementById("question");

const inputE1=document.getElementById("input");

const formE1=document.getElementById("form");

const scoreE1=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));

if (!score){
    score=0;
}
scoreE1.innerText=`score: ${score}`;

questionE1.innerText=`what is ${num1} multiple by ${num2} ?`;
const correctAns=num1*num2;

formE1.addEventListener("submit",()=>{
    const userAns=+inputE1.value
    if (userAns==correctAns){
        score+=1;
        updateLocalstorage()
     
    }else{
        score-=1;
        updateLocalstorage()
      

    }
})

function updateLocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}