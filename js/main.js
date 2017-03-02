var trabajadores = [{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" }, { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" }, { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" }, { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" }, { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }];


function mostrar(){
  var ficha = "";

  for (var i in trabajadores) {
    ficha += "<div><li>Nombre:"   + trabajadores[i].nombre + "<br>" +
            "<li>Apellido:" + trabajadores[i].apellido    + "<br>" +
            "<li>Rol:" + trabajadores[i].rol + "<br>"+
            "<li>Cumpleaños:" + trabajadores[i].cumpleanios + "<br>" + "</div><br>";
  }
  document.getElementById('lista').innerHTML = ficha;
}
