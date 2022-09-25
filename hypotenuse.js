const side = document.querySelectorAll(".si");
const hypo = document.querySelector("#btn");
const out = document.querySelector("#out");

function calsqr(a,b)
{
    const sqr = a*a + b*b;
    return sqr;
}

function calculate(){
    if(Number(side[0].value) === 0)
    {
        out.innerText = "plzz enter number";
    }
    else{

        const sum = calsqr(Number(side[0].value), Number(side[1].value));
        const len = Math.sqrt(sum);
        out.innerText = "The length of hypotenuse is "+ len;
    }
}


hypo.addEventListener("click", calculate)