function startJS(){
    $(function(){
        //Abrir Menu Desplegable
        $("#openMenu").click(function(){
          $(".menu-desplegable").css("display","flex");
          $(".menu-desplegable").animate({width:"100%"},500);
          $("#openMenu").css("visibility","hidden");
        });
        //Cerrar Menu Desplegable
        $("#closeMenu").click(function(){
          $(".menu-desplegable").css("display","none")
          $("#openMenu").css("visibility","visible");
          
        });
    });
};
window.onload=startJS;