// Enrique Fernandez-Campoamor Fernandez


let numero = prompt("Ingrese un número: ")

if (eval(numero) > 0) {
  console.log("El número ingresado es positivo")
  alert("El número ingresado es positivo")
} else if (eval(numero) < 0) {
  console.log("El número ingresado es negativo")
  alert("El número ingresado es negativo")
} else {
  console.log("El número ingresado es igual a cero.")
  alert("El número ingresado es igual a cero.")
}
