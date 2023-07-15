import { Component } from '@angular/core';

@Component({

  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {


  public nombreHeroes: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public eliminarHeroe?:string;

  eliminarUltimoHeroe():void{
    this.eliminarHeroe = this.nombreHeroes.pop();

    }


}
