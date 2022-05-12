const container = document.querySelector(".container");
const btn = document.querySelector("button");
let n;
for(let i = 0; i < 256; i++){
    container.appendChild(document.createElement('div'));
}

let div = document.querySelectorAll(".container > div");
div.forEach(element => {element.setAttribute("style", "width: 40px; height: 40px ; outline: 1px solid;")});
div.forEach(element => {element.addEventListener("mouseover", () => element.style.backgroundColor = 'black')});

btn.addEventListener("click", () => { 
    n =  prompt("Please input the number of squares per side for the new grid",  16);
    while (n>100){
        n =   prompt("Please enter a value less than 100");
    }
    if(n === null || n === ''){
        n = 16;
        clearGrid();
        setGrid();
    }
    clearGrid();
    setGrid();
});


function clearGrid(){
  while(container.firstChild){
      container.removeChild(container.firstChild);
  }
}

function setGrid(){
    for(let i = 0; i < n*n; i++){
        container.appendChild(document.createElement('div'));
       }
    div = document.querySelectorAll("div > div");
    div.forEach(element => {
        element.style.width = `${640/n}px`;
        element.style.height = `${640/n}px`;
        element.style.outline = '1px solid';
    });
    div.forEach(element => {element.addEventListener("mouseover", () => element.style.backgroundColor = 'black')});
}




