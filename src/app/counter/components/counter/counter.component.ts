import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{counter}}</p>
<button (click) ="sumar(+1)">+</button>
<button (click)="restar(-1)">-</button>
<button (click)="dividir(2)">/</button>
<button (click)="multiplicar(3)">*</button>
<button (click)="reset()">Reset</button>
  `
})

export class CounterComponent {

  public counter: number = 19;

  sumar = (value: number): void => {
    this.counter = this.counter + value;
  }

  restar = (value: number): void => {
    this.counter = this.counter + value;
  }

  dividir(value: number): void {
    this.counter = this.counter / value;
  }

  multiplicar(value: number): void {
    this.counter *= value;
  }

  reset(): void {
    this.counter = 19;
  }

}

