import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Primera part
  title = 'Abel';
  place = {
    city: "Valencia",
    cp: "46000"
  }
  entrada = "cod"
  valorhola = "123456"
  disabled = false
  color="color2"

  miColor = true;

  estilos = {
    "azul": this.miColor,
    "rojo": !this.miColor
  }

  carStyle = {
    color : "green",
    font: "italic 30px arial",
    
  }

  onClick(event){
    console.log("hola"+event+" "+event.type)
  }

  cambio(){
    console.log("HA CAMBIADO")
  }

  // Segona part
  var1 = true;
  var2 = false;
  var3 = 3;

  queEsVar1():boolean{
    return this.var1;
  }

  fun(){
    return 4;
  }

  cars = [
    {
       "Name":"chevrolet chevelle malibu",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":307,
       "Horsepower":130,
       "Weight_in_lbs":3504,
       "Acceleration":12,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
       "Name":"buick skylark 320",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":350,
       "Horsepower":165,
       "Weight_in_lbs":3693,
       "Acceleration":11.5,
       "Year":"1970-01-01",
       "Origin":"USA"
    },
    {
      "Name":"plymouth satellite",
      "Miles_per_Gallon":18,
      "Cylinders":8,
      "Displacement":318,
      "Horsepower":150,
      "Weight_in_lbs":3436,
      "Acceleration":11,
      "Year":"1970-01-01",
      "Origin":"USA"
   }
  ]
}
