//Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log('Enviando formulario');
});

//Eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    msg: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const msg = document.querySelector('#msg');

nombre.addEventListener('input', leerTxt);
email.addEventListener('input', leerTxt);
msg.addEventListener('input', leerTxt);

function leerTxt(e){
    datos[e.target.id] = e.target.value;

    console.log(e.target.value);
    console.log(datos);
}