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
    
});





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
