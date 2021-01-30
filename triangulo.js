"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(punto1, punto2, punto3) {
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var lados = [];
        lados.push(this.punto1.calcularDistancia(this.punto2));
        lados.push(this.punto2.calcularDistancia(this.punto3));
        lados.push(this.punto3.calcularDistancia(this.punto1));
        return lados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
;
