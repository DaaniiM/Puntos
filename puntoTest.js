"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var triangulo_1 = require("./triangulo");
var punto1 = new punto_1.Punto(4, 5);
console.log(punto1.toString());
console.log(punto1.getX());
console.log(punto1.getY());
punto1.setX(5);
punto1.setY(4);
console.log(punto1.toString());
console.log("------------");
var puntoA = new punto_1.Punto(4, 5);
console.log(puntoA.distanciaAlOrigen());
console.log("------------");
var punto2 = new punto_1.Punto(6, 8);
console.log(puntoA.calcularDistancia(punto2));
console.log("------------");
console.log(puntoA.calcularCuadrante());
console.log("------------");
var puntosAll = [new punto_1.Punto(5, 4), new punto_1.Punto(6, 8), new punto_1.Punto(7, 4), new punto_1.Punto(5, 5), new punto_1.Punto(9, 9)];
console.log(puntoA.calcularMasCercano(puntosAll));
console.log("------------");
var triangulo1 = new triangulo_1.Triangulo(new punto_1.Punto(6, 4), new punto_1.Punto(7, 2), new punto_1.Punto(4, 8));
console.log(triangulo1.calcularLongitudLados());
