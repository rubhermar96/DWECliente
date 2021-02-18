function startJS(){

    $(function(){
      //Abrir Menu Desplegable
      $("#openMenu").click(function(){
        $(".menu-desplegable").css("display","flex");
        $(".menu-desplegable").animate({width:"100%"},500);
        $("#openMenu").css("visibility","hidden");
        $("#mapid").css("display","none");
      });
      //Cerrar Menu Desplegable
      $("#closeMenu").click(function(){
        $(".menu-desplegable").css("display","none")
        $("#openMenu").css("visibility","visible");
        $("#mapid").css("display","flex");
      });
    });
    var userInfo = {};
    userInfo.usuario= "";
    userInfo.password = "";
    userInfo.nombre = "";
    userInfo.apellidos = "";

    /*Controles Slider*/
    $(function(){
        $(".slides").slidesjs({
          play: {
            active: true,
              // [boolean] Generate the play and stop buttons.
              // You cannot use your own buttons. Sorry.
            effect: "slide",
              // [string] Can be either "slide" or "fade".
            interval: 6000,
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
};
window.onload=startJS;
