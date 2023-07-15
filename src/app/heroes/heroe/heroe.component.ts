import { Component } from '@angular/core';

@Component({

  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public nombre: string = 'ironman';
  public edad: number= 45;

  get nombreEnMayuscula():string{
    return this.nombre.toUpperCase();

  }

  getDescripcionHeroe():string{
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarHeroe():void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad():void{
    this.edad = 30;
  }

  resetearFormulario():void{
    this.nombre = 'ironman';
    this.edad = 45;

  }

}
