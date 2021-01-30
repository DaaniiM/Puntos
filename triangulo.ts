
import {Punto} from "./punto";

export class Triangulo{

    private punto1:Punto;
    private punto2:Punto;
    private punto3:Punto;


    constructor(punto1:Punto,punto2:Punto,punto3:Punto){

        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3
    }


    public calcularLongitudLados():number[]{

        let lados = [];


        lados.push(this.punto1.calcularDistancia(this.punto2));

        lados.push(this.punto2.calcularDistancia(this.punto3));

        lados.push(this.punto3.calcularDistancia(this.punto1));


        return lados;

    }

};

