import { Component } from '@angular/core';
//import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-counter',
  template: `
  <h3> counter : {{counter}}</h3>
  <button (click)="incrementarPor(+1)" >+1</button>
  <button  (click)="reiniciar()">Reiniciar</button>
  <button (click)="incrementarPor(-1)" >-1</button>

  `
})

export class CounterComponent  {
  public counter: number = 10;


  incrementarPor(value:number):void{
    this.counter += value;
  }

  reiniciar(){
    this.counter = 10;
  }
}



