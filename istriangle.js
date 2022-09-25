const inp = document.querySelectorAll(".an");
const button = document.querySelector("#btn");
const out = document.querySelector("#output");

function istria(){
    const add = Number(inp[0].value) + Number(inp[1].value) + Number(inp[2].value);
    if(add === 180)
    {
        out.innerText = "Angle form a triangle";
    }
    else{
        out.innerText = "Angle is not a triangle";
    }
    
}

button.addEventListener("click", istria)

