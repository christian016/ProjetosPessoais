document.addEventListener("click", e => {
  let handle;
  if (e.target.matches(".handle")) {
    handle = e.target;
  }
  else {
    handle = e.target.closest(".handle");
  }
  if (handle != null) {
    onHandleClick(handle);

  }
})
let leftClick= 0;
let rightClick= 3;
function onHandleClick(phandle) {
  let row = document.querySelector("#shows");
  if(phandle.classList.contains("btnFilmes")){
    row = document.querySelector("#filmes");
  }
  else if(phandle.classList.contains("btnPecas")){
    row = document.querySelector("#pecas");
  }
  if(phandle.classList.contains("right-handle")){
    --rightClick;
    ++leftClick;
    row.scrollLeft += 1000;
    
    if(rightClick < 0) {row.scrollLeft = 0; rightClick = 3; leftClick=0;}

  }

  else{
    --leftClick;
    ++rightClick;
    row.scrollLeft -= 1000;

    if(leftClick < 0) {row.scrollLeft = 4000; leftClick = 3; rightClick= 0;}
  }
}