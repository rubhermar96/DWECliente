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

        $("#abrirRegistro").click(function(){
            $(".form-registro").css("display","flex");
        })
    });

    //Registrar Usuario
    document.getElementById("registrarUsuario").addEventListener("click",function(){
        var userUsuario,nombreUsuario, apellidosUsuario, passUsuario;
        userUsuario = document.getElementById("rusuario").value;
        nombreUsuario = document.getElementById("nombreUsuario").value;
        apellidosUsuario = document.getElementById("apellidosUsuario").value;
        passUsuario = document.getElementById("rpass").value;
        if(window.indexedDB){
            if(userUsuario!="" && nombreUsuario!="" && apellidosUsuario!="" && passUsuario!=""){
                var peticion = window.indexedDB.open("surfGuide");
                peticion.onsuccess = function(evento){
                    var db = peticion.result;
                    var transaccion = db.transaction(db.objectStoreNames,"readwrite");
                    var usersGuide = transaccion.objectStore("users");
                    usersGuide.add({usuario:userUsuario,nombreUsuario:nombreUsuario,apellidos:apellidosUsuario,password:passUsuario});
                    if(document.getElementById("checkregistro").checked){
                        var usuarioR = {};
                        usuarioR.usuario = userUsuario;
                        usuarioR.password = passUsuario;
        
                        var usuarioRJSON = JSON.stringify(usuarioR);
                        localStorage.setItem("usuarioR",usuarioRJSON);
                    }
                    var userInfo = {};
                    userInfo.usuario= userUsuario;
                    userInfo.password = passUsuario;
                    userInfo.nombre = nombreUsuario;
                    userInfo.apellidos = apellidosUsuario;
        
                    var userInfoJSON = JSON.stringify(userInfo);
                    localStorage.setItem("userInfo",userInfoJSON);
                    alert("Usuario Registrado");
                    window.location.href="sessions.html";
                }
            }else{
                alert("Rellenar Todos los Campos")
            }
        }
    });
    //Comprobar acceso Usuario
    document.getElementById("accederUsuario").addEventListener("click",function(){
        var userUsuario, passUsuario;
        userUsuario = document.getElementById("user").value;
        passUsuario = document.getElementById("pass").value;

        if(window.indexedDB){
            if(userUsuario!="" && passUsuario!=""){
                var peticion = window.indexedDB.open("surfGuide");
                peticion.onsuccess = function(evento){
                    var db = peticion.result;
                    var transaccion = db.transaction(db.objectStoreNames,"readwrite");

                    var usersGuide = transaccion.objectStore("users");
                    var registro = usersGuide.get(userUsuario);
                    registro.onsuccess = function(evento){
                        if(registro.result.password === passUsuario){
                            if(document.getElementById("checkusuario").checked){
                                var usuarioR = {};
                                usuarioR.usuario = userUsuario;
                                usuarioR.password = passUsuario;
                
                                var usuarioRJSON = JSON.stringify(usuarioR);
                                localStorage.setItem("usuarioR",usuarioRJSON);
                            }
                            var userInfo = {};
                            userInfo.usuario = registro.result.usuario;
                            userInfo.password = registro.result.password;
                            userInfo.nombre = registro.result.nombreUsuario;
                            userInfo.apellidos = registro.result.apellidos;

                            var userInfoJSON = JSON.stringify(userInfo);
                            localStorage.setItem("userInfo",userInfoJSON);
                            alert("Usuario Identificado");
                            window.location.href="sessions.html";
                        }else{
                            alert("Contraseña incorrecta");
                        }
                    }
                }
            }else{
                alert("Introduce el Usuario y Contraseña");
            }
        }
    });
    var usuarioCheckJSON = localStorage.getItem("usuarioR");
    var usuarioCheck = JSON.parse(usuarioCheckJSON);
    if(usuarioCheck.usuario!=null){
        document.getElementById("user").value = usuarioCheck.usuario;
        document.getElementById("pass").value = usuarioCheck.password;
    }
};
window.onload=startJS;