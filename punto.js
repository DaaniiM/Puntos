"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distancia = Math.sqrt(Math.pow((this.x - 0), 2) + Math.pow((this.y - 0), 2));
        return distancia;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var distanciaPuntos = Math.sqrt(Math.pow((otroPunto.getX() - this.x), 2) + Math.pow((otroPunto.getY() - this.y), 2));
        return distanciaPuntos;
    };
    Punto.prototype.calcularCuadrante = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var list = [];
        var cercano = 9999999;
        var puntoMasCercano;
        var i;
        for (i = 0; i < puntos.length; ++i) {
            list.push(Math.sqrt(Math.pow((puntos[i].getX() - this.x), 2) + Math.pow((puntos[i].getY() - this.y), 2)));
            if (list[i] < cercano) {
                cercano = list[i];
                puntoMasCercano = puntos[i];
            }
        }
        return puntoMasCercano;
    };
    return Punto;
}());
exports.Punto = Punto;
;
