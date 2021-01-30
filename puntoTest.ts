
import {Punto} from "./punto";



let punto1 = new Punto(4,5);

console.log(punto1.toString());

console.log("------------");

console.log(punto1.distanciaAlOrigen());

console.log("------------");

let punto2 = new Punto(6,8);

console.log(punto1.calcularDistancia(punto2));

console.log("------------");

let puntosAll = [new Punto(5,4),new Punto(6,8),new Punto(7,4),new Punto(5,5)];

console.log(punto1.calcularMasCercano(puntosAll));
