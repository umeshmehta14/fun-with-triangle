const qz = document.querySelector(".form");
const sabtn = document.querySelector("#btn")
const out = document.querySelector("#output")


const Ca = ["21","Equilateral triangle", "Base", "Pythagoras", "3"];

function score() {
    let score = 0;
    let i = 0;
    let k = 0;
    const result = new FormData(qz);
    for(let value of result.values() ){
         if(value === Ca[i])
         {
            score = score + 1;
         }
         k++;
         i = i+1;
    }
    if(k < Ca.length){
      out.style.color = "red";
      out.innerText = "please give all the answers";
    }
    else{
      out.style.color = "white";
       out.innerText = "Your score is " + score;
      }
}

sabtn.addEventListener("click", score);