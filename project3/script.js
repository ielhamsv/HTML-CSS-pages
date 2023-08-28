const s_left=document.getElementById("s-left");
const s_right=document.getElementById("s-right");
let slide=document.getElementsByClassName("slide")
let dot=document.getElementsByClassName("dot")

let n=0;
let i;
function disno(){
    for(i=0;i<slide.length;i++){
        slide[i].style.display="none"
    }
}

function noactive(){
    for (i=0;i<dot.length;i++){
        dot[i].classList.remove("active")
    }
}

s_right.addEventListener("click",function (e){
    e.preventDefault()
    n++;
    disno();
    if(n>slide.length-1){
        n=0
    }
    disno()
    slide[n].style.display="block"
    noactive()
    dot[n].classList.add("active")
})

s_left.addEventListener("click",function (e){
    e.preventDefault()
    n++;
    if(n>slide.length-1){
        n=0
    }
    disno()
    slide[n].style.display="block"
    noactive()
    dot[n].classList.add("active")
})

setInterval(function (){
    n++;
    if(n>slide.length-1){
        n=0
    }
    disno()
    slide[n].style.display="block"
    noactive()
    dot[n].classList.add("active")
},2500)