import data from '../data.js'

let btnFavorito = document.getElementById("abrirFavorito");
btnFavorito.onclick = function() {
    abrirFavorito();
};

let paises = [];
let inputId = document.getElementById("inputID")
inputId.addEventListener("input", function(){
    buscar()
})

let btnCerrarModal = document.getElementById("btnCerrarModal");

btnCerrarModal.onclick = function() {
    cerrar();
  };

function abrirFavorito(){
    let paisFavorito = localStorage.getItem("paisFavorito");
    paisFavorito = JSON.parse(paisFavorito);
    if(paisFavorito === undefined || paisFavorito === null ||   Object.keys(paisFavorito).length === 0){
        alert("You haven't selected your favorite country");
    } else {
        abrirModal(paisFavorito);
    }

}



function buscar(){
    let inputText = inputId.value.toLowerCase();
    let papitoContainer = document.getElementById("continentsContainer");
    while(papitoContainer.firstChild){
        papitoContainer.removeChild(papitoContainer.firstChild);
    }
    let paisesAmerica = paises.filter(pais => {
        if (pais.region === "Americas") {
            let name = pais.name.common.toLowerCase();
            return name.includes(inputText);
        }
        
    });

    let paisesEuropa = paises.filter(pais => {
        if (pais.region === "Europe") {
            let name = pais.name.common.toLowerCase();
            return name.includes(inputText);
        }

    });

    let paisesOceania = paises.filter(pais => {
        if (pais.region === "Oceania"){
            let name = pais.name.common.toLowerCase();
            return name.includes(inputText);
        }
        
    });

    let paisesAsia = paises.filter(pais => {
        if (pais.region === "Asia"){
            let name = pais.name.common.toLowerCase();
            return name.includes(inputText);
        }
        
    });

    let paisesAfrica = paises.filter(pais => {
        if (pais.region === "Africa"){
            let name = pais.name.common.toLowerCase();
            return name.includes(inputText);
        }
        
    });
    
    creandoEuropa(paisesEuropa);
    creandoAsia(paisesAsia);
    creandoAmerica(paisesAmerica);
    creandoOceania(paisesOceania);
    creandoAfrica(paisesAfrica);
}

function creandoEuropa(data){
    if(data.length > 0){
        const section = document.getElementById("continentsContainer")
        let article = document.createElement("article");
        article.classList.add("continent");
        let h2Continente = document.createElement("h2");
        h2Continente.textContent = "EUROPA"
        section.appendChild(h2Continente);
        section.appendChild(article);
        data.forEach(pais =>{
            if (pais.region === "Europe"){
                let div = document.createElement("div");
                let img = document.createElement("img");
                let p = document.createElement("p"); 
                div.onclick = function(){
                    abrirModal(pais);
                }
                div.classList.add("continent__item");
                img.setAttribute("src", pais.flags.png);
                p.textContent = pais.name.common;
                img.classList.add("flag");
                div.classList.add("continent__item");
                div.appendChild(img);
                div.appendChild(p);
                article.appendChild(div); 
            }
        })

    }
}

//ASIA
function creandoAsia(data){
    const section = document.getElementById("continentsContainer")
    section.classList.add("continent-container");
    let article = document.createElement("article");
    article.classList.add("continent");
    let h2Continente = document.createElement("h2");
    if (data.length > 0) h2Continente.textContent = "ASIA"
    section.appendChild(h2Continente);
    section.appendChild(article);
    data.forEach(pais =>{
        if (pais.region === "Asia"){
            let div = document.createElement("div");
            let img = document.createElement("img");
            let p = document.createElement("p"); 
            div.onclick = function(){
                abrirModal(pais);
            }
            div.classList.add("continent__item");
            img.setAttribute("src", pais.flags.png);
            p.textContent = pais.name.common;
            img.classList.add("flag");
            div.classList.add("continent__item");
            div.appendChild(img);
            div.appendChild(p);
            article.appendChild(div);
            
        }
    })
}

//AMERICA

function creandoAmerica(data){
    const section = document.getElementById("continentsContainer")
    section.classList.add("continent-container");
    let article = document.createElement("article");
    article.classList.add("continent");
    let h2Continente = document.createElement("h2");
    if (data.length > 0) h2Continente.textContent = "AMERICA";
    section.appendChild(h2Continente);
    section.appendChild(article);
    data.forEach(pais =>{
        if (pais.region === "Americas"){
            let div = document.createElement("div");
            let img = document.createElement("img");
            let p = document.createElement("p"); 
            div.onclick = function(){
                abrirModal(pais);
            }
            div.classList.add("continent__item");
            img.setAttribute("src", pais.flags.png);
            p.textContent = pais.name.common;
            img.classList.add("flag");
            div.classList.add("continent__item");
            div.appendChild(img);
            div.appendChild(p);
            article.appendChild(div);
            
        }
    })
}

//OCEANIA
function creandoOceania(data){
    const section = document.getElementById("continentsContainer")
    section.classList.add("continent-container");
    let article = document.createElement("article");
    article.classList.add("continent");
    let h2Continente = document.createElement("h2");
    if (data.length > 0) h2Continente.textContent = "OCEANIA"
    data.length > 0 && section.appendChild(h2Continente);
    section.appendChild(article);
    data.forEach(pais =>{
        if (pais.region === "Oceania"){
            let div = document.createElement("div");
            let img = document.createElement("img");
            let p = document.createElement("p");
            div.onclick = function(){
                abrirModal(pais);
            } 
            div.classList.add("continent__item");
            img.setAttribute("src", pais.flags.png);
            p.textContent = pais.name.common;
            img.classList.add("flag");
            div.classList.add("continent__item");
            div.appendChild(img);
            div.appendChild(p);
            article.appendChild(div);
            
        }
    })
}

//AFRICA
function creandoAfrica(data){
    const section = document.getElementById("continentsContainer")
    section.classList.add("continent-container");
    let article = document.createElement("article");
    article.classList.add("continent");
    let h2Continente = document.createElement("h2");
    if (data.length > 0) h2Continente.textContent = "AFRICA"
    data.length > 0 && section.appendChild(h2Continente);
    section.appendChild(article);
    data.forEach(pais =>{
        if (pais.region === "Africa"){
            let div = document.createElement("div");
            let img = document.createElement("img");
            let p = document.createElement("p");
            div.onclick = function(){
                abrirModal(pais);
            } 
            div.classList.add("continent__item");
            img.setAttribute("src", pais.flags.png);
            p.textContent = pais.name.common;
            img.classList.add("flag");
            div.classList.add("continent__item");
            div.appendChild(img);
            div.appendChild(p);
            article.appendChild(div);
            
        }
    })
}

function abrirModal(pepe){
    let miModal = document.getElementById("miModal");
    let img = document.createElement("img");
    let a = document.createElement("a");
    let paisFavorito = localStorage.getItem("paisFavorito");
    paisFavorito = JSON.parse(paisFavorito);
    if (pepe?.name?.common === paisFavorito?.name?.common){
        localStorage.setItem('estrella', 'yellow');
        img.setAttribute("src", "./images/estrella-filled.png");
    } else {
        localStorage.setItem('estrella', 'white');
        img.setAttribute("src", "./images/estrella.png");
    }
    img.classList.add("estrella");
    img.id = "estrella";
    a.id="linkEstrella"
    a.onclick = function() {
        marcarFavorito(pepe);

    };

    a.appendChild(img);



    let tituloModal = document.getElementById("tituloModal");
    tituloModal.textContent = pepe?.name.common;

    let imgModal = document.getElementById("imgModal");
    imgModal.setAttribute("src", pepe?.flags.png);

    let capitalModal = document.getElementById("capitalModal");
    capitalModal.textContent = pepe.capital && pepe?.capital[0];

    let monedaCapital = document.getElementById("monedaModal");
    for (let clave in pepe?.currencies){
        monedaCapital.textContent = pepe?.currencies[clave].name
     }

       let languagesModal = document.getElementById("languagesModal");
       miModal.appendChild(a);
    for (let clave in pepe?.languages){
        let p = document.createElement("p"); 
        p.textContent = pepe?.languages[clave]
        languagesModal.appendChild(p);
        
     }
     
     let poblacionModal = document.getElementById("poblacionModal");
     const numero = pepe.population;
     const numeroFormateado = numero.toLocaleString('es-ES')
     poblacionModal.textContent = numeroFormateado;

    let modal = document.getElementById("modalContainer");
    modal.style.display = "block";
}


function marcarFavorito(paisSeleccionado){
    let img = document.getElementById("estrella")
    let color = localStorage.getItem("estrella")
    if (color === "white" ){
        img.src="./images/estrella-filled.png"
        localStorage.setItem('estrella', 'yellow');
        localStorage.setItem("paisFavorito",JSON.stringify(paisSeleccionado));
    } else {
        img.src="./images/estrella.png"
        localStorage.setItem('estrella', 'white');
        localStorage.setItem('paisFavorito',JSON.stringify({}));
    }
}



function cerrar(){
    let modal = document.getElementById("modalContainer");
    let miModal = document.getElementById("miModal");
    let estrella = document.getElementById("linkEstrella");
    miModal.removeChild(estrella);

    let languagesModal = document.getElementById("languagesModal");

    while(languagesModal.firstChild){
        languagesModal.removeChild(languagesModal.firstChild);
    }
    modal.style.display = "none";

}


function init (){
    fetch("https://restcountries.com/v3.1/all").then(response =>{
        if(!response.ok){
            throw new Error("Error obtaining data")
        }
        return response.json()

    }).then(data =>{
        paises = data
        creandoEuropa(data);
        creandoAsia(data);
        creandoAmerica(data);
        creandoOceania(data);
        creandoAfrica(data);
    })
}

init();



