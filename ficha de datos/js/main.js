window.addEventListener('load', function(){
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var dni = document.getElementById('dni');
    var direccion = document.getElementById('direccion');

    var data = document.getElementById('datos');
    var go = document.getElementById('boton');
    go.addEventListener('click', function(){
        data.innerHTML = "Nombre" + " " + nombre.value + "<br>Apellido:" + " " + apellido.value + "<br>DNI:" + " " + dni.value + "<br>Dirección:" + " " + direccion.value;
    });
});
