$.getJSON("eventos.json", function(data) {
    console.log(data);
    var today = $("#hoyTemplate").html();
    var notavailable = $("#agotadoTemplate").html();
    var defaulttemplate = $("#eventTemplate").html();
    $.each(data.eventos, function(key, val) {
        console.log(val.today)
        if (val.today) {
            var template = Handlebars.compile(today);

        } else if (val.available) {
            var template = Handlebars.compile(notavailable);
        } else {
            var template = Handlebars.compile(defaulttemplate);

        }
        var html = template(val);
        $("#eventos").append(html);



    });

    //lugar-fecha-hora del evento en movil//
    var onlymovil = $("#moviltemplate").html();
    $.each(data.eventos, function(key, val) {
        console.log(val.today)
        var template = Handlebars.compile(onlymovil);
        var html = template(val);
        $("#eventosmovil").append(html);

    });

});
//puntos de venta-cotacto-correo//
$.getJSON("eventos.json", function(data) {
    console.log(data);
    var source = $("#puntostemplate").html();
    var template = Handlebars.compile(source);
    $.each(data.puntos, function(key, val) {
        var html = template(val);
        console.log(html);
        $("#puntos").append(html);

    });
    var source = $("#numerostemplate").html();
    var template = Handlebars.compile(source);
    $.each(data.numeros, function(key, val) {
        var html = template(val);
        console.log(html);
        $("#numeros").append(html);

    });
    var source = $("#correotemplate").html();
    var template = Handlebars.compile(source);
    $.each(data.correo, function(key, val) {
        var html = template(val);
        console.log(html);
        $("#correo").append(html);

    });

});
//mostrar detalle del evento en evento.html

var idaux=-1;
    $(document).on("click", '.edit_button', function(evt) {
alert("holaaaaa");

window.location.href='evento.html?id='+this.id;
  });

$.getJSON("eventos.json", function(data) {
     var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
        return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
});

alert($_GET["id"]);


    var source = $("#detalleTemplate").html();
    alert("porsi");
      $.each(data.eventos, function(key, val) {
         console.log(val.id);
         if(val.id==$_GET["id"]){
            alert("entroooooo " +val.id+" "+val.nombre+" "+this.id+" "+$_GET["id"] );
var template = Handlebars.compile(source);
var html = template(val);
        $("#detalle").append(html);
         }
        
 
  });  
        });


/*
$.getJSON("eventos.json", function(data) {
    var source = $("#detalleTemplate").html();
    
      $.each(data.eventos, function(key, val) {
         console.log(html);
         if(val.id==this.id){
var template = Handlebars.compile(source);

         }
        var html = template(val);
        $("#detalle").append(html);
 
  });  
        });

windows.location.href='evento.html';

$(document).on("click", '.edit_button', function(evt) {
  
  alert(this.id);
    alert("holaaaaa");
});

*/

//mostrar u ocultar paneles en evento.html//

$("#continuar").click(function() {
    $("#asientos").hide(0, function() {

    });
    $("#login").show(0, function() {});
});

$("#registrarme").click(function() {
    $("#login").hide(0, function() {

    });
    $("#registrar").show(0, function() {});
});

$("#ingresar").click(function() {
    $("#login").hide(0, function() {

    });
    $("#editar").show(0, function() {});
});
