const btn = document.querySelector('.btn_up');

btn.addEventListener('click',(scrollUp));

function scrollUp (){

    // crreamos una variable asegurandonos que coge todo el documento.
    let = currentScroll = document.documentElement.scrollTop;

    if(currentScroll > 0){
        window.requestAnimationFrame(scrollUp); // para que me prepara como una animación
        window.scrollTo (0, currentScroll - (currentScroll / 10));
       // buttonUp.style.transform = "scale(0)"; // btn desaparece al jacer click.
    }
}

// función para animar la aparicion del botón
buttonUp = document.querySelector('.btn_up');

window.onscroll = function(){

    let scroll = document.documentElement.scrollTop; // posición arriba del scroll.

    if(scroll > 100){ 
        buttonUp.style.transform = "scale(1)"; 
    }else if(scroll < 100){
        buttonUp.style.transform = "scale(0)";
    }
}



