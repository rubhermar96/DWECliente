function startJS(){
    //Abrir Menu Desplegable
    var menuDesplegable = document.getElementById("menuDesp");
    document.getElementById("openMenu").onclick=function(){
        menuDesplegable.style.display="flex";
        //Ocultar Boton Menu
        document.getElementById("openMenu").style.visibility="hidden";
    }
    //Cerrar Menu Desplegable
    document.getElementById("closeMenu").onclick=function(){
        menuDesplegable.style.display="none";
        //Mostrar Boton Menu
        document.getElementById("openMenu").style.visibility="visible";
    }
}
window.onload=startJS;
