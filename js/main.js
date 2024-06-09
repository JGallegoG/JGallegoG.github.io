
//seleccionamos el contenedor de los proyectos
const proyectContainer = document.getElementById('card_container');

const btnBurguer = document.querySelector('.burger');
const links = document.getElementById('nav_links');

//funcionalidad del botón de burguer navegador
btnBurguer.addEventListener('click', () => {
    links.classList.toggle('show')
});

links.addEventListener('click', () =>{
    links.classList.toggle('show')
})


//funcion que itera por el array de tecnologías y las muesta

const getTecnologias = (tecnologias) => {
    let res = "";
    tecnologias.forEach(tecnologia => {
        res += `<span class="tecno"> - ${tecnologia}</span>`
    })
    return res;
}

//iteramos por los proyectos para mostrarlos
proyectos.forEach(proyecto => {
    //para cada proyecto generamos los elementos y los volcamos al DOM
    const newProyecto = document.createElement('article');
    newProyecto.className = 'card'
    newProyecto.textContent = proyecto.titulo;
    proyectContainer.appendChild(newProyecto);
    //incorporamos el contenido de la terjeta con innerHTML
    newProyecto.innerHTML = `
    <img src="${proyecto.imagen}" class="card_img">
    <h3 class="card_titulo">${proyecto.titulo}</h3>
    <p class= "card_parrafo">${proyecto.descripcion}</p>
    <p class= "card_parrafo_info">${getTecnologias(proyecto.tecnologias)}</p>
    <a class="card_btn" href="${proyecto.link}" target="_blank" rel=”noopener noreferrer”>Ver proyecto</a>
    `
});







