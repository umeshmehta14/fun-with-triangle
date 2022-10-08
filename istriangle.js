const inp = document.querySelectorAll(".an");
const button = document.querySelector("#btn");
const out = document.querySelector("#output");

function istria(){
    if(Number(inp[0].value) === 0 || Number(inp[1].value) === 0 || Number(inp[2].value) === 0){
        out.style.color = "red";
        out.innerText = "Please enter all the angles";
    }
    else{
        if(Number(inp[0].value) < 0 || Number(inp[1].value) < 0 || Number(inp[2].value) < 0){
            out.style.color = "red";
        out.innerText = "Please enter positive angles";
        }
        else{

            
            const add = Number(inp[0].value) + Number(inp[1].value) + Number(inp[2].value);
            if(add === 180)
            {
                out.style.color = "green";
                out.innerText = "Angle form a triangle";
            }
            else{
                out.style.color = "red";
                out.innerText = "Angle is not a triangle";
            }
        }
    }
    
}

button.addEventListener("click", istria)

