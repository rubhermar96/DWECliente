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
              spotsGuide.put({nombre:"El Palmar",localidad:"Vejer de La Frontera",coordenadas:"36.23221811629584, -6.071930993600678",coeficiente:"Todos",marea:"Baja y Alta",dirSwell:"SurOeste",imagenSpot:"images/elPalmar.jpg",descripcionSpot:"",rompiente:"Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"La Fontanilla",localidad:"Conil de la Frontera",coordenadas:"36.28112081581643, -6.09999054339235",coeficiente:"Alto +80",marea:"Baja y Alta",dirSwell:"Sur",imagenSpot:"images/laFontanilla.jpg",descripcionSpot:"",rompiente:"Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"El Faro",localidad:"Cabo de Trafalgar",coordenadas:"36.18385889919317, -6.035755275330941",coeficiente:"Todos",marea:"Baja",dirSwell:"Sur y SurOeste",imagenSpot:"images/faro2.jpg",descripcionSpot:"",rompiente:"Orillera de Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"Roche",localidad:"Conil de la Frontera",coordenadas:"36.317651233009805, -6.155525453334802",coeficiente:"Todos",marea:"Baja",dirSwell:"Sur y SurOeste",imagenSpot:"images/roche.jpg",descripcionSpot:"",rompiente:"Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"CampoLoco",localidad:"San Fernando",coordenadas:"36.429371024603554, -6.231212880915914",coeficiente:"Alto +80",marea:"Alta",dirSwell:"Sur y SurOeste",imagenSpot:"images/campoloco.jpg",descripcionSpot:"",rompiente:"Orillera de Arena",dirViento:"Este y Norte"});
              spotsGuide.put({nombre:"El Club",localidad:"Caños de Meca",coordenadas:"36.18442904041706, -6.016569194038305",coeficiente:"Alto +90",marea:"Alta",dirSwell:"Sur, SurEste y SurOeste",imagenSpot:"images/veryLate.jpg",descripcionSpot:"", rompiente:"Roca",dirViento:"Norte y Oeste"});
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
          spotsGuide = db.createObjectStore("sessions",{keyPath:"usuario",autoIncrement:false});
          spotsGuide.createIndex("por_nombreUsuario","usuario",{unique:false});
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
        });
        document.getElementById("lista-spots").appendChild(divSpot);

        //Mostrar más información Spots
        var divSpotPlus = document.createElement("div");
        var divInfo = document.createElement("div");
        var listaInfo = document.createElement("ul");

        listaInfo.innerHTML = "<li>Nombre: "+spot.nombre+"</li><li>Localidad: "+spot.localidad+"</li><li>Tipo Rompiente: "+spot.rompiente+"</li><li>Viento: "+spot.dirViento+"</li><li>Marea: "+spot.marea+"</li><li>Dirección Swell: "+spot.dirSwell+"</li><li>Descripción Spot: "+spot.descripcionSpot+"</li>";
        //mapa

        divInfo.appendChild(listaInfo);
        divInfo.classList.add("div-info");

        var divImagen2 = document.createElement("div");
        var img2 = document.createElement("img");
        img2.src=spot.imagenSpot;
        divImagen2.appendChild(img2);
        divSpotPlus.appendChild(divImagen2);
        divSpotPlus.appendChild(divInfo);
        var btnInfo = document.createElement("button");
        btnInfo.textContent="Cerrar";
        btnInfo.addEventListener("click",function(){
          $(".div-spot-plus").css("display","none");
        })
        divSpotPlus.appendChild(btnInfo);

        divSpotPlus.classList.add("div-spot-plus");

        document.getElementById("body-guide").appendChild(divSpotPlus);

      };
};
window.onload=startJS;
