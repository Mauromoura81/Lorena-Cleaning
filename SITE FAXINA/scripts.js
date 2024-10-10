const abacate = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")

function cliqueinobotao(){
    abacate.style.left = "50%"
    abacate.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function formoff(){
    abacate.style.left = "-300px"
    abacate.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}