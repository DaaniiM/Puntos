

export class Punto{

    private x:number;
    private y:number;

    constructor(x:number,y:number){

        this.x = x;
        this.y = y;

    }

    public toString():string{

        return "(" + this.x.toString() + "," + this.y.toString() + ")";
    }

    public getX():number{

        return this.x;
    }

    public getY():number{

        return this.y;
    }

    public setX(x:number){

        this.x = x;
    }

    public setY(y:number){

        this.y = y;
    }

    public distanciaAlOrigen():number{


        let distancia = Math.sqrt(Math.pow((this.x-0),2)+Math.pow((this.y-0),2));

        return distancia;


    }

    public calcularDistancia(otroPunto:Punto):number{

        let distanciaPuntos = Math.sqrt(Math.pow((otroPunto.getX()-this.x),2)+Math.pow((otroPunto.getY()-this.y),2));

        return distanciaPuntos;

    }


    public calcularCuadrante():number{


        if(this.x == 0 || this.y == 0 ){

            return 0

        }else if(this.x>0 && this.y>0){

            return 1;

        }else if(this.x<0 && this.y>0){

            return 2;

        }else if(this.x<0 && this.y<0){

            return 3;

        }else if(this.x>0 && this.y<0){

            return 4;

        }
    }

    public calcularMasCercano(puntos:Punto[]):Punto{

        let list = [];

        let cercano = 9999999;

        let puntoMasCercano;

        let i;

        
        for(i=0; i<puntos.length; ++i){

            list.push(Math.sqrt(Math.pow((puntos[i].getX()-this.x),2)+Math.pow((puntos[i].getY()-this.y),2)))

            if(list[i]<cercano){

                cercano = list[i];

                puntoMasCercano = puntos[i];
            }

        }

        return puntoMasCercano;

    }

    


};