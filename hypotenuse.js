const side = document.querySelectorAll(".si");
const hypo = document.querySelector("#btn");
const out = document.querySelector("#out");

function calsqr(a,b)
{
    const sqr = a*a + b*b;
    return sqr;
}

function calculate(){
    if(Number(side[0].value) < 0 || Number(side[1].value) < 0)
    {
        out.style.color = "red";
        out.innerText = "Enter positive Number";
    }
    else{
        if(Number(side[0].value) === 0 || Number(side[1].value) === 0)
        {
            out.style.color = "red";
            out.innerText = "Please fill up both fields";
        }
        else{
            out.style.color = "white";
            const sum = calsqr(Number(side[0].value), Number(side[1].value));
            const len = parseFloat(Math.sqrt(sum).toFixed(3));
            out.innerText = "The length of hypotenuse is "+ len;
        }
    }
}


hypo.addEventListener("click", calculate)