import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  onClick(event){
    console.log("hola"+event+" "+event.type)
  }

  cambio(){
    console.log("HA CAMBIADO")
  }
}
