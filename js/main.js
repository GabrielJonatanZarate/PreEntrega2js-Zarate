function filtrarCompaPorCaracteristica() {
    const caracteristica = prompt("Ingrese la caracteristica que quiere filtrar").toLowerCase();
    const nuevoArray = compa.filter(el => el.poder.includes(caracteristica));

    if (nuevoArray.length > 0)
        console.log(`Filtraste por su caracteristica "${caracteristica}" y obtuviste ${nuevoArray.length} compa`, nuevoArray);
}




function filtrarCompaPorNumero() {
    const limite = parseInt(prompt("Ingresar numero de compa a filtrar, minimo 1, maximo 8"))

    if (limite > 0 && limite < 8) {
        const nuevoArray = compa.slice(0, limite);
        console.log(`Filtraste ${limite} compa`, nuevoArray)
    } else {
        alert("Ingresaste un valor no valido. Volveras al inicio")
    }
}


function agregarCompa() {
    const nombre = prompt("Ingrese nombre de su nuevo compa");

    const nuevoCompa = {
        id: compa.length + 1,
        nombre: nombre
    }

    compa.push(nuevoCompa);
    alert(`Agregaste a ${nombre} correctamente`)
    console.log(compa);
}


let opcion;

do {

    opcion = parseInt(prompt(`Hola soy Luffy, bienvenido a mi tripulacion. 

    1. Para un nuevo puesto 
    2. Para mostrar su fruta del diablo o habilidad
    3. Para agregar un nuevo compa

    Para salir ingrese 0`))

    switch (opcion) {
        case 0:
            alert("Se fue a otro barco")
            break;
        case 1:
            filtrarCompaPorNumero();
            break;
        case 2:
            filtrarCompaPorCaracteristica();
            break;
        case 3:
            agregarCompa();
            break;

        default:
            alert("Ingresar una opcion valida")
            break;
    }

} while (opcion !== 0);