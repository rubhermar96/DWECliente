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
    $(function(){
        $(".slides").slidesjs({
          play: {
            active: true,
              // [boolean] Generate the play and stop buttons.
              // You cannot use your own buttons. Sorry.
            effect: "fade",
              // [string] Can be either "slide" or "fade".
            interval: 5000,
              // [number] Time spent on each slide in milliseconds.
            auto: true,
              // [boolean] Start playing the slideshow on load.
            swap: true,
              // [boolean] show/hide stop and play buttons
            pauseOnHover: false,
              // [boolean] pause a playing slideshow on hover
            restartDelay: 1000
              // [number] restart delay on inactive slideshow
          }
        });
      });
}
window.onload=startJS;
