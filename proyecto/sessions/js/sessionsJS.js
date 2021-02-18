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
    document.getElementById("insertarSesion").addEventListener("click",function(){
      $(".new-session").css("display","flex");
    });
    document.getElementById("btnCerrar").addEventListener("click",function(){
      $(".new-session").css("display","none");
    });
    document.getElementById("btnCerrar2").addEventListener("click",function(){
      $(".mod-session").css("display","none");
    });
    document.getElementById("btninsertar").addEventListener("click",function(){
      var spot,fecha,numOlas,descripcion;
      spot = document.getElementById("spot").value;
      fecha = document.getElementById("fecha").value;
      numOlas = document.getElementById("olas").value;
      descripcion = document.getElementById("descripcion").value;

      if(window.indexedDB){
        if (spot!="" && fecha!="" && numOlas!="" && descripcion!=""){
          var peticion = window.indexedDB.open("surfGuide");
          peticion.onsuccess = function(evento){
            var db = peticion.result;
            var transaccion = db.transaction(db.objectStoreNames,"readwrite");
            var sessionsGuide = transaccion.objectStore("sessions");
            var usuarioJSON = localStorage.getItem("userInfo");
            var usuario = JSON.parse(usuarioJSON);
            sessionsGuide.add({usuario:usuario.usuario,spot:spot,fecha:fecha,olas:numOlas,descripcion:descripcion});
            alert("Sesión Registrada");
            window.location.href="sessions.html";
          }
        }else{
          alert("Rellenar Todos los Campos");
        }
      }
    });
    document.getElementById("btnmodificar").addEventListener("click",function(){
      console.log("click")
      var cod, spot, fecha, numOlas, descripcion;
      cod = document.getElementById("codigo").value;
      spot = document.getElementById("spot2").value;
      fecha = document.getElementById("fecha2").value;
      numOlas = document.getElementById("olas2").value;
      descripcion = document.getElementById("descripcion2").value;
      if(window.indexedDB){
        if(spot!="" && fecha!="" && numOlas!="" && descripcion!=""){
          var peticion = window.indexedDB.open("surfGuide");
          peticion.onsuccess = function(evento){
            var db = peticion.result;
            var transaccion = db.transaction(db.objectStoreNames,"readwrite");
            var sessionsGuide = transaccion.objectStore("sessions");
            var usuarioJSON = localStorage.getItem("userInfo");
            var usuario = JSON.parse(usuarioJSON);
            sessionsGuide.put({cod_sesion:parseInt(cod),usuario:usuario.usuario,spot:spot,fecha:fecha,olas:numOlas,descripcion:descripcion});
            alert("Sesión Modificada");
            window.location.href="sessions.html";
          }
        }else{
          alert("Rellenar Todos los Campos");
        }
      }
    });
    document.getElementById("btneliminar").addEventListener("click",function(){
      var cod = document.getElementById("codigo").value;
      
      if(window.indexedDB){
        var peticion = window.indexedDB.open("surfGuide");
        peticion.onsuccess=function(evento){
          var db = evento.target.result;
          var transaccion = db.transaction(db.objectStoreNames,"readwrite");
          var sessionsGuide = transaccion.objectStore("sessions");
          var peticionEliminacion = sessionsGuide.delete(parseInt(cod));

          peticionEliminacion.onsuccess = function(){
            alert("Sesión Eliminada");
            window.location.href="sessions.html";
          }
        }
      }
    });
    var peticion, db, spotsGuide;
    if(window.indexedDB){
      peticion = window.indexedDB.open("surfGuide");
      peticion.onsuccess=function(evento){
        db = peticion.result;
        var transaccion = db.transaction(db.objectStoreNames,"readwrite");
        spotsGuide = transaccion.objectStore("sessions");
        var peticionCursor = spotsGuide.openCursor();
        peticionCursor.onsuccess=function(evento){
          var cursor = peticionCursor.result;
          if(cursor){
            insertarElemento(cursor.value);
            cursor.continue();
          }
        }
      }
    }
    var usuarioJSON = localStorage.getItem("userInfo");
    var usuario = JSON.parse(usuarioJSON);
    function insertarElemento(sesion){
      if(sesion.usuario === usuario.usuario){
        var divSession = document.createElement("div");
        var divCod = document.createElement("div");
        var divSpot = document.createElement("div");
        var divFecha = document.createElement("div");
        var divOlas = document.createElement("div");
        var divDesc = document.createElement("div");

        divCod.innerText=sesion.cod_sesion;
        divSpot.innerText=sesion.spot;
        divFecha.innerText=sesion.fecha;
        divOlas.innerText=sesion.olas;
        divDesc.innerText=sesion.descripcion
        
        divSession.classList.add("sesiones");
        divSession.addEventListener("click",function(){
          $(".mod-session").css("display","flex");
          document.getElementById("codigo").value = divCod.textContent;
          document.getElementById("spot2").value = divSpot.textContent;
          document.getElementById("fecha2").value = divFecha.textContent;
          document.getElementById("olas2").value = divOlas.textContent;
          document.getElementById("descripcion2").value = divDesc.textContent;

        });
        divSession.appendChild(divCod);
        divSession.appendChild(divSpot);
        divSession.appendChild(divFecha);
        divSession.appendChild(divOlas);
        divSession.appendChild(divDesc);

        document.getElementById("sesion-cont").appendChild(divSession);


      }
    }

};
window.onload=startJS;