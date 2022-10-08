const qz = document.querySelector(".form");
const sabtn = document.querySelector("#btn")
const out = document.querySelector("#output")


const Ca = ["21","Equilateral triangle", "Base", "Pythagoras", "3"];

function score() {
    let score = 0;
    let i = 0;

    const result = new FormData(qz);
    for(let value of result.values() ){
         if(value === Ca[i])
         {
            score = score + 1;
         }
         i = i+1;
    }
   out.innerText = "Your score is " + score;
}

sabtn.addEventListener("click", score);