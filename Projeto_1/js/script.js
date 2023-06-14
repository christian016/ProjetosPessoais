let menuIsOpen = false;
const button = document.querySelector(".mobile-menu");
const menuEsquerda = document.querySelector(".divMenusEsquerda");
const menuDireita = document.querySelector(".divMenusDireita");
const buttonActive = document.querySelector(".fa-bars-filter");
const buttonDefault = document.querySelector(".fa-bars");

button.addEventListener("click", () =>{
    if(!menuIsOpen){
        menuDireita.style.display = 'flex';
        menuEsquerda.style.display = 'flex';
        menuIsOpen = true;
    }
    else{
        menuDireita.style.display = 'none';
        menuEsquerda.style.display = 'none';
        menuIsOpen = false;
    }
})