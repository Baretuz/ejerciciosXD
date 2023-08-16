const num1 = parseFloat(prompt("ingrese el primer numero:"))
const num2 = parseFloat(prompt("ingrese el primer segundo:"))
const num3 = parseFloat(prompt("ingrese el primer tercer:"))

let mayor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}

console.log(`El mayor de los tres números es: ${mayor}`);







