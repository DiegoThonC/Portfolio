let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
    return;
  }
  document.getElementById("nav").classList = "responsive";
  menuVisible = true;
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("angular");
    habilidades[2].classList.add("react");
    habilidades[3].classList.add("firebase");
    habilidades[4].classList.add("node");
    habilidades[5].classList.add("htmlcss");
    habilidades[6].classList.add("scss");
    habilidades[7].classList.add("bootstrap");
    habilidades[8].classList.add("angular-material");
    habilidades[9].classList.add("tailwind");
    habilidades[10].classList.add("comunicacion");
    habilidades[11].classList.add("trabajo");
    habilidades[12].classList.add("creatividad");
    habilidades[13].classList.add("dedicacion");
    habilidades[14].classList.add("ingles");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
