function startJS(){
    //Registrar Usuario
    document.getElementById("registrarUsuario").addEventListener("click",function(){
        var userUsuario,nombreUsuario, apellidosUsuario, passUsuario;
        userUsuario = document.getElementById("rusuario").value;
        nombreUsuario = document.getElementById("nombreUsuario").value;
        apellidosUsuario = document.getElementById("apellidosUsuario").value;
        passUsuario = document.getElementById("rpass").value;
        if(window.indexedDB){
            peticion = window.indexedDB.open("surfGuide");

            peticion.onsuccess = function(evento){
            db = peticion.result;
            transaccion = db.transaction(db.objectStoreNames,"readwrite");
            
            usersGuide = transaccion.objectStore("users");
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
        }
    });
};
window.onload=startJS;