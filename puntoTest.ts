
import {Punto} from "./punto";

import {Triangulo} from "./triangulo";



let punto1 = new Punto(4,5);

console.log(punto1.toString());

console.log(punto1.getX());

console.log(punto1.getY());

punto1.setX(5);

punto1.setY(4);

console.log(punto1.toString())

console.log("------------");

let puntoA = new Punto(4,5);

console.log(puntoA.distanciaAlOrigen());

console.log("------------");

let punto2 = new Punto(6,8);

console.log(puntoA.calcularDistancia(punto2));

console.log("------------");

console.log(puntoA.calcularCuadrante());

console.log("------------");

let puntosAll = [new Punto(5,4),new Punto(6,8),new Punto(7,4),new Punto(5,5),new Punto(9,9)];

console.log(puntoA.calcularMasCercano(puntosAll));

console.log("------------");

let triangulo1 = new Triangulo (new Punto(6,4),new Punto(7,2),new Punto(4,8));

console.log(triangulo1.calcularLongitudLados());


