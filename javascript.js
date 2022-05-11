const container = document.querySelector(".container");

for(let i = 0; i < 256; i++){
    container.appendChild(document.createElement('div'));
   }

const div = document.querySelectorAll("div > div");
console.log(div); 
div.forEach(element => {element.addEventListener("mouseover", () => element.setAttribute("style", "background-color:red;"));
    
});


