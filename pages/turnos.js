//Turnos formulario
class Turno{
    constructor(nombre, apellido, mail, celular, fecha, servicio, sucursal, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.celular = celular;
        this.fecha = fecha;
        this.servicio = servicio;
        this.sucursal = sucursal;
        this.mensaje = mensaje;
    }
}

let turnos = []

let formTurnos = document.getElementById('formulario')
let divTurnos =  document.getElementById('turnos')
let btnTurno = document.getElementById('botonTurno')

formTurnos.addEventListener('submit', (e) => {
    e.preventDefault()

    let datForm = new FormData(e.target)
    let turnoNew = new Turno(datForm.get('nombre'), datForm.get('apellido'), datForm.get('mail'), datForm.get('celular'), datForm.get('fecha'), datForm.get('servicio'), datForm.get('sucursal'), datForm.get('mensaje'));

    turnos.push(turnoNew);
    localStorage.setItem('turnos', JSON.stringify(turnos))

    formTurnos.reset()
})

$('#botonTurno').click(function () {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Gracias por tu Turno!',
        showConfirmButton: false,
        timer: 1500
    })
});

//Píe de página
class Footer {
    constructor(nombreFooter, mailFooter, msjFooter) {
        this.nombreFooter = nombreFooter;
        this.mailFooter = mailFooter;
        this.msjFooter = msjFooter;
    }
}

let consulta = []

let formFooter = document.getElementById('formFooter')
let divFooter = document.getElementById('msjDivFooter')
let btnFooter = document.getElementById('btnFooter')

formFooter.addEventListener('submit', (e) => {
    e.preventDefault()

    let dataForm = new FormData(e.target)
    let msjNew = new Footer(dataForm.get('nombreFooter'), dataForm.get('mailFooter'), dataForm.get('msjFooter'));

    consulta.push(msjNew);
    localStorage.setItem('consulta', JSON.stringify(consulta))

    formFooter.reset()
})