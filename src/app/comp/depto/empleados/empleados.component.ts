import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: [
  ]
})
export class EmpleadosComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.departamento = {
      id:this.rutaActiva.snapshot.params.id,
      nombre:this.rutaActiva.snapshot.paramMap.get("name")
    }
  }

  departamento:{id:string, nombre:string};

}
