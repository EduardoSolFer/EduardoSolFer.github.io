class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

const personas = [
    new Persona('Alondra', 'Cruz'),
    new Persona('Eduardo', 'Solis')
];

function mostrarPersonas(){
    // console.log('Mostrar personas...');
    let texto = '';
    for (let persona of personas){
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}


function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
if (nombre.value != '' && apellido.value != '') {
    const persona = new Persona(nombre.value, apellido.value);
    // console.log(persona);
    personas.push(persona);
    mostrarPersonas();
} else window.alert('Ingresa datos correctos')
    nombre.value = '';
    apellido.value = '';
}