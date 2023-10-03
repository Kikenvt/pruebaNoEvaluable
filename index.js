// Enrique Fernandez-Campoamor Fernandez
// https://github.com/Kikenvt/pruebaNoEvaluable.git


let numero = parseFloat(prompt("Ingrese un número: "))

// Añadida la funcion eval en caso de que el usuario ingrese un operador.

if (eval(numero) > 0) {
  console.log("El número ingresado es positivo")
  alert("El número ingresado es positivo")
} else if (eval(numero) < 0) {
  console.log("El número ingresado es negativo")
  alert("El número ingresado es negativo")
} else if(eval(numero)=0){
  console.log("El número ingresado es igual a cero.")
  alert("El número ingresado es igual a cero.")
}else{
    console.log("Dato no válido")
    alert("Dato no válido")
}
