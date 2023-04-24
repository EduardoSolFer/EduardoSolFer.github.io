console.log("Listado de persona");

const personas = [
    new Persona('Alondra', 'Cruz'),
    new Persona('Eduardo', 'Fernandez')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for (let persona of personas){
        console.log(persona);
    }
}