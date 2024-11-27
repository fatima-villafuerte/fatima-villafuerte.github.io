var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentarios
typewriter.typeString('Ingeniera Geofísica')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar lo puedes crear')
    .pauseFor(2500)
    // Número de caracteres que se borraran 
    .deleteChars(5)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();