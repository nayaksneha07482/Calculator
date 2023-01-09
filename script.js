let btn = document.querySelector(".buttons");
let value = document.querySelector("#value");
let span = document.querySelectorAll('span');
let togglebtn = document.querySelector(".togglebtn");
let body = document.querySelector('body');

for(let i=0; i<span.length; i++){
    span[i].addEventListener("click", function(){
        if(this.innerHTML=="="){
            value.innerHTML=eval(value.innerHTML);
        }else{
            if(this.innerHTML=="Clear"){
                value.innerHTML="";
            }else{
                value.innerHTML+=this.innerHTML;
            }
        }
    })
}

togglebtn.onclick = function(){
    body.classList.toggle('dark')
}