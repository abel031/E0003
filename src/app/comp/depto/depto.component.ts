import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depto',
  templateUrl: './depto.component.html',
  styles: [
  ]
})
export class DeptoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public idDepto = 1;

  departamentos = [
    {id:1,name:"contabilidad"},
    {id:2,name:"nominas"},
    {id:3,name:"almacen"}
  ]

  IrAVentas(){
    this.router.navigate([ '/empleados', 25, "ventas" ]);
  }

}
