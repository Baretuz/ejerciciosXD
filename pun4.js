const product = parseFloat(prompt("ingrese un producto:"))
const price = parseFloat(prompt("ingrese el precio del producto:"))
const percentage = parseFloat(prompt("ingrese el porcentaje:"))

const total = percentage * price / 100

console.log (`el porcentage de (${product}) es (${total}`)
