import { Component }
  from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public marvelHeroes: string[] = [
    "Spider-Man",
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Doctor Strange",
    "Black Panther",
    "Captain Marvel",
    "Wolverine"
  ];

  public deletedHero?: string;

  deleteLastHero():void {
    this.deletedHero = this.marvelHeroes.pop();

  }
}
