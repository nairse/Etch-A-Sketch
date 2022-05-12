const container = document.querySelector(".container");
const gridBtn = document.querySelector(".grid");
let n;
const blackBtn = document.querySelector(".black");
const rgbBtn = document.querySelector(".rgb");

//Initial grid setup on page load
for(let i = 0; i < 256; i++){
    container.appendChild(document.createElement('div'));
}
let div = document.querySelectorAll(".container > div");
div.forEach(element => {element.setAttribute("style", "width: 40px; height: 40px ; outline: 1px solid;")});

//Black Ink Picker
blackBtn.addEventListener("click", () => {
    div.forEach(element => {element.addEventListener("mouseover", () => element.style.backgroundColor = 'black')});
})

//Rainbow Ink Picker
rgbBtn.addEventListener("click",() => {
    div.forEach(element => element.addEventListener("mouseover",() => element.style.backgroundColor ='#'+`${Math.floor(Math.random()*16777215).toString(16)}`));
    })

//Choose grid Size    
gridBtn.addEventListener("click", () => { 
    n =  prompt("Please input the number of squares per side for the new grid",  16);
    while (n>100){
        n =   prompt("Please enter a value less than 100");
    }
    if(n === null || n === ''){ // default to the original 16x16 grid if no input is null or empty
        n = 16;
        clearGrid();
        setGrid();
    }
    clearGrid();
    setGrid();
});

//Clears the grid each time a new grid size is chosen by the user
function clearGrid(){
  while(container.firstChild){
      container.removeChild(container.firstChild);
  }
}
//Sets up a new grid as per user's input
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




