$(document).ready(function() {   

    var value;

    $(".titulo").keydown(function(e) {
        console.log("Tecla apertada - "+e.keyCode);
        console.log("Valor do input - "+$("#titulo").val());
        console.log("Texto do input - "+$("#titulo").text());
    });
});
