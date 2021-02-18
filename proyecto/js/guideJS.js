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
        
    var userInfoJSON = JSON.stringify(userInfo);
    localStorage.setItem("userInfo",userInfoJSON);
    /*Insertar Mapa*/
    var mymap = L.map('mapid').setView([36.270813, -6.066452], 10);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicnViaGVybWFyOTYiLCJhIjoiY2tsYTM4aXI1MDA0eTJuczNuNzI4bWhoOSJ9.KBkxbyI4yVxRYvoVxcx1fw'
        }).addTo(mymap);
      //CREACION BASE DE DATOS
      var peticion,db,spotsGuide;			

      if (window.indexedDB) {
        peticion = window.indexedDB.open("surfGuide",4);
        peticion.onsuccess = function (evento) {
    
          db = peticion.result;
          var transaccion = db.transaction(db.objectStoreNames, "readwrite");
          spotsGuide = transaccion.objectStore("spots");
          //COMPROBAR QUE LA BASE DE DATOS EXISTE
          contadorSpots = spotsGuide.count();
          contadorSpots.onsuccess = function () {
            if(contadorSpots.result<1){
              //SI NO EXISTE SE INTRODUCEN LOS DATOS
              spotsGuide.put({nombre:"El Palmar",localidad:"Vejer de La Frontera",coord1:36.23221811629584,coord2:-6.071930993600678,coeficiente:"Todos",marea:"Baja y Alta",dirSwell:"SurOeste",imagenSpot:"images/elPalmar.jpg",descripcionSpot:"Una de las mejores olas de toda la costa. Recomendable para todos los niveles de surf, desde principiante (cuando hay poco tamaño) a experto (cuando hay mucho oleaje). Es el Spot que más tamaño aguanta de toda la costa de Cádiz. Suele haber mucha gente.",rompiente:"Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"La Fontanilla",localidad:"Conil de la Frontera",coord1:36.28112081581643, coord2:-6.09999054339235,coeficiente:"Alto +80",marea:"Baja y Alta",dirSwell:"Sur",imagenSpot:"images/laFontanilla.jpg",descripcionSpot:"Spot ideal para aprender, paredes largas y poco verticales, no suele haber mucha gente.",rompiente:"Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"El Faro",localidad:"Cabo de Trafalgar",coord1:36.18385889919317,coord2:-6.035755275330941,coeficiente:"Todos",marea:"Baja",dirSwell:"Sur y SurOeste",imagenSpot:"images/faro2.jpg",descripcionSpot:"La mejor ola de la costa gaditana. Orillera con mucha potencia, recomendable solo para surfistas con experiencia. Corriente muy fuerte y peligrosa.",rompiente:"Orillera de Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"Roche",localidad:"Conil de la Frontera",coord1:36.317651233009805,coord2:-6.155525453334802,coeficiente:"Todos",marea:"Baja",dirSwell:"Sur y SurOeste",imagenSpot:"images/roche.jpg",descripcionSpot:"Spot muy parecido a El Palmar, suele estar menos masificado y la ola es más vertical y potente, recomendable para surfistas con experiencia.",rompiente:"Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"CampoLoco",localidad:"San Fernando",coord1:36.429371024603554,coord2:-6.231212880915914,coeficiente:"Alto +80",marea:"Alta",dirSwell:"Sur y SurOeste",imagenSpot:"images/campoloco.jpg",descripcionSpot:"Se le dice el 'mini' faro, ola muy parecida a el Faro pero con menos potencia. Orillera muy divertida para todos los niveles.",rompiente:"Orillera de Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"El Club",localidad:"Caños de Meca",coord1:36.18442904041706,coord2:-6.016569194038305,coeficiente:"Alto +90",marea:"Alta",dirSwell:"Sur, SurEste y SurOeste",imagenSpot:"images/veryLate.jpg",descripcionSpot:"Necesita un coeficiente y marea muy especial. Cuando funciona es una ola muy potente y hueca. Recomendable para surfistas con experiencia por su fondo de roca.", rompiente:"Roca",dirViento:"Norte y Oeste"});
            };
            //MOSTRAR LISTA SPOTS EN guideSpots.html
            var peticionCursor = spotsGuide.openCursor();

            peticionCursor.onsuccess = function(evento){
              var cursor = peticionCursor.result;
              if(cursor){
                insertarElemento(cursor.value);
                cursor.continue();
              }
            }
          }
          var spotsGuide2 = transaccion.objectStore("sessions");
          var contadorSessions = spotsGuide2.count();
          contadorSessions.onsuccess=function(){
            if(contadorSessions.result<1){
              spotsGuide2.put({usuario:"usuario1",spot:"El Palmar",fecha:"2021-01-04",olas:9,descripcion:"Baño tranquilo con poca gente, cogí 2 olas muy buenas e hice una maniobra nueva"});
              spotsGuide2.put({usuario:"usuario1",spot:"La Fontanilla",fecha:"2021-01-10",olas:25,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});
              spotsGuide2.put({usuario:"usuario1",spot:"Roche",fecha:"2021-01-13",olas:20,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});
              spotsGuide2.put({usuario:"usuario1",spot:"El Faro",fecha:"2021-01-14",olas:15,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});
              spotsGuide2.put({usuario:"usuario1",spot:"Roche",fecha:"2021-01-15",olas:21,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});
              spotsGuide2.put({usuario:"usuario1",spot:"La Fontanilla",fecha:"2021-01-20",olas:30,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});
              spotsGuide2.put({usuario:"usuario1",spot:"El Palmar",fecha:"2021-01-22",olas:20,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});
              spotsGuide2.put({usuario:"usuario1",spot:"El Palmar",fecha:"2021-01-23",olas:12,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});
              spotsGuide2.put({usuario:"usuario1",spot:"El Faro",fecha:"2021-01-25",olas:17,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});
              spotsGuide2.put({usuario:"usuario2",spot:"La Fontanilla",fecha:"2021-02-12",olas:16,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});
              spotsGuide2.put({usuario:"usuario2",spot:"La Fontanilla",fecha:"2021-02-12",olas:16,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"}); 
              spotsGuide2.put({usuario:"usuario2",spot:"La Fontanilla",fecha:"2021-02-12",olas:16,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"}); 
              spotsGuide2.put({usuario:"usuario2",spot:"La Fontanilla",fecha:"2021-02-12",olas:16,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"}); 
              spotsGuide2.put({usuario:"usuario2",spot:"La Fontanilla",fecha:"2021-02-12",olas:16,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"}); 
              spotsGuide2.put({usuario:"usuario2",spot:"La Fontanilla",fecha:"2021-02-12",olas:16,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"}); 
              spotsGuide2.put({usuario:"usuario2",spot:"La Fontanilla",fecha:"2021-02-12",olas:16,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"}); 
              spotsGuide2.put({usuario:"usuario2",spot:"La Fontanilla",fecha:"2021-02-12",olas:16,descripcion:"Olas flojitas pero divertidas, baño con amigos y mejorando la posición surfeando"});  
            }
          }
          spotsGuide3 = transaccion.objectStore("users");
          var contadorUsers = spotsGuide3.count();
          contadorUsers.onsuccess=function(){
            if(contadorUsers.result<1){
              spotsGuide3.put({usuario:"usuario1",nombreUsuario:"Rubén",apellidos:"H y M",password:"1234"});
              spotsGuide3.put({usuario:"usuario2",nombreUsuario:"Mario",apellidos:"LS",password:"1234"});
            }
          }
        };
    
        peticion.onupgradeneeded = function (evento) {
          db = peticion.result;
          //Tabla spots
          spotsGuide = db.createObjectStore("spots", {keyPath:"cod_spot", autoIncrement:true});
          spotsGuide.createIndex("por_codigo", "cod_spot", {unique: true});
          spotsGuide.createIndex("por_nombre", "nombre");
          spotsGuide.createIndex("por_localidad", "localidad");
          //Tabla usuarios
          spotsGuide = db.createObjectStore("users",{keyPath:"usuario",autoIncrement:false});
          spotsGuide.createIndex("poc_nombreUsuario","usuario",{unique:true});
          //Tabla sesiones
          spotsGuide = db.createObjectStore("sessions",{keyPath:"cod_sesion",autoIncrement:true});
          spotsGuide.createIndex("por_cod","cod_sesion",{unique:true});
          spotsGuide.createIndex("por_usuario","usuario");
        };
      } else {
        console.log("IndexedDB no está soportado");
      };
      //CREACION DE LOS ELEMENTOS PARA MOSTRAR LOS SPOTS
      function insertarElemento(spot){
        var divSpot = document.createElement("div");
        var divImagen = document.createElement("div");
        var divNombre = document.createElement("div");
        var divLoc = document.createElement("div");
        
        var img = document.createElement("img");
        img.src=spot.imagenSpot;
        divImagen.appendChild(img);

        var nombre = document.createElement("h4");
        nombre.textContent=spot.nombre;
        divNombre.appendChild(nombre);

        var loc = document.createElement("h4");
        loc.textContent=spot.localidad;
        divLoc.appendChild(loc);

        divSpot.appendChild(divImagen);
        divSpot.appendChild(divNombre);
        divSpot.appendChild(divLoc);
        divSpot.classList.add("div-spot");
        divSpot.addEventListener("click",function(){
          var cont = $(this).index();
          if($(this).index()==cont){
            $(".div-spot-plus:eq("+cont+")").css("display","flex");
          }
          $("#mapid").css("display","none");
        });
        document.getElementById("lista-spots").appendChild(divSpot);

        //Mostrar más información Spots
        var divSpotPlus = document.createElement("div");
        var divInfo = document.createElement("div");
        var listaInfo = document.createElement("ul");

        listaInfo.innerHTML = "<li>Nombre: "+spot.nombre+"</li><li>Localidad: "+spot.localidad+"</li><li>Tipo Rompiente: "+spot.rompiente+"</li><li>Viento: "+spot.dirViento+"</li><li>Marea: "+spot.marea+"</li><li>Dirección Swell: "+spot.dirSwell+"</li><li>Descripción Spot: "+spot.descripcionSpot+"</li>";
        //popus del mapa
        var aux = spot.nombre;
        var marker = L.marker([spot.coord1,spot.coord2]).addTo(mymap);
        marker.bindPopup("<b>"+aux+"</b><br>"+spot.localidad);

        divInfo.appendChild(listaInfo);
        divInfo.classList.add("div-info");

        var divImagen2 = document.createElement("div");
        var img2 = document.createElement("img");
        img2.src=spot.imagenSpot;
        divImagen2.appendChild(img2);
        divSpotPlus.appendChild(divImagen2);
        divSpotPlus.appendChild(divInfo);
        var btnInfo = document.createElement("button");
        btnInfo.textContent="close";
        btnInfo.classList.add("material-icons");
        btnInfo.addEventListener("click",function(){
          $(".div-spot-plus").css("display","none");
          $("#mapid").css("display","flex");
        })
        divSpotPlus.appendChild(btnInfo);

        divSpotPlus.classList.add("div-spot-plus");

        document.getElementById("body-guide").appendChild(divSpotPlus);

      };
};
window.onload=startJS;