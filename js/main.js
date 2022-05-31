$(document).ready(function () {

    $(".cuarto").css({ "background-color": "pink" });
    $("#tercero").css({ "background-color": "green" });
    $("#segundo").css({ "background-color": "red" });
    $(".primero").css({ "background-color": "orange" });
    $("#quinto").css({ "background-color": "purple" });
    $("#sexto").css({ "background-color": "yellow" });
    $("#septimo").css({ "background-color": "blue" });

    //EJERCICIO 01
    $("#click").click(function () {
        alert("HOLA :) BIENVENIDO A ESTE PROGRAMA");
    });

    //EJERCICIO 02

    $("#esconder").dblclick(function () {
        alert("Esconder");
        $("#segundo").hide();
        //dblclick para doble click
    });

    $("#mostrar").dblclick(function () {
        alert("Mostrar");
        $("#segundo").show();

    });

    //EJERCICIO 03

    $(".cuarto").mouseenter(function () {
        $("#tercero").slideUp();

    });

    $(".cuarto").mouseleave(function () {
        $("#tercero").slideDown();

    });

    //EJERCICIO 04

    $(function () {

        $("#parrafo").click(function () {

            alert($("#quinto").text());

        });

    });

    $(function () {

        $("#titulo").click(function () {

            alert($("#quinto").attr("title"));

        });

    });

    //EJERCICIO 05

    $(function () {

        $("#alterar").click(function () {

            $("#sexto").text("Este párrafo ah sido alterado si usted desea recuperarlo refresque la página o presione F5");

        });

    });

    //EJERCICIO 06

    $(function () {

        $("#añadirf").click(function () {

            $("#septimo").append("ESTE TEXTO ESTÁ SIENDO AÑADIDO UWU, si de da click varias veces se añadirá más texto, para volver al texto original refresque la página o presione F5");
            $("#añadirf").click(function () {

                //para que el texto esté al principio solo se cambia el append por el prepend.
                //para nuevo parrafo se cambia el appent por un after(crea un parrafo al final).
                //para nuevo parrafo se cambia el appent por un before(crea un parrafo al inicio).
                //$(#segundo).remove();, es para eliminar no para ocultar.
                //$(#btn-show).empty();, es para vaciar un elemento, se puede usar en buttons para más detalle.   
            });
        });

        $(function () {

            $("#añadirp").click(function () {

                $("#septimo").prepend("ESTE TEXTO ESTÁ SIENDO AÑADIDO UWU, si de da click varias veces se añadirá más texto, para volver al texto original refresque la página o presione F5");
                $("#añadirp").click(function () {
                });
            });

        });
    });
});
