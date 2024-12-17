var radio = document.querySelector('.manual-btn')

document.getElementById('radio1').checked = true

function mostrarSlide(slideNumber) {
    document.getElementById('radio' + slideNumber).checked = true;
}


