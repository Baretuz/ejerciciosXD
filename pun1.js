const num1 = parseFloat(prompt("ingrese el primer numero:"));
const num2 = parseFloat(prompt("ingrese el segundo numero:"));

const suma = num1 + num2; 

if (suma > 0) {
    console.log("la suma es positiva.");
} else if (suma < 0) {
    console.log("la suma es negativa.");
} else {
    console.log("la suma es cero.");
}
