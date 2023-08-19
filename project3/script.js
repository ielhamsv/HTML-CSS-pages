const dir_right = document.getElementById("dir-right")
const dir_left = document.getElementById("dir-left")
const slide = document.getElementById("slide")
const dot_right=document.getElementById("dir-right")
const dot_left=document.getElementById("dir-left")


dir_right.addEventListener("click",onclick)
dir_left.addEventListener("click",onclick)

function onclick(e){
    e.preventDefault()


    slide.classList.toggle("switch")
}
