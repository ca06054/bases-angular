import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 37;
  public showChangeEdadButton:boolean=true;
  public showChangeNameButton:boolean=true;

  get capitalize(): string {
    return this.name?.toUpperCase() || 'NO NAME';
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'Spiderman'
    this.showChangeNameButton=false;
  }

  changeAge(): void {
    this.age = 19;
    this.showChangeEdadButton=false;
  }

  resetForm(){
    this.name = 'ironman';
  this.age = 37;
  this.showChangeEdadButton=true;
  this.showChangeNameButton=true;
  }
}
