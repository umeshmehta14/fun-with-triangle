const inp = document.querySelectorAll(".cm");
const btn = document.querySelector("#btn");
const out = document.querySelector(".output");

function calculate(){
    if(Number(inp[0].value) === 0 || Number(inp[1].value) === 0 )
    {
        out.innerText = "Plzz enter number";
    }
    else
    {
        const sum = (Number(inp[0].value)*Number(inp[1].value));
        const div = sum/2;
        out.innerText = "The area of triangle is "+ div;
    }
}

btn.addEventListener("click", calculate)