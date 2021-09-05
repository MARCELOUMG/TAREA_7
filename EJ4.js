const appContenedor = document.querySelector("#EJ4");
const ejercicio4 = [10, 20, 30, 20, 30, 40, 60];
let suma = ejercicio4.reduce((anterior, actual) => {
    return appContenedor.innerHTML = anterior + actual;
})
appContenedor.innerHTML = `Promedio del array = ${suma / ejercicio4.length}`;

console.log(suma / ejercicio4.length);