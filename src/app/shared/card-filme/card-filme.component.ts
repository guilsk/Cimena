import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/model/filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent {
  @Input() filme: Filme

  constructor(){
    this.filme = new Filme(0, '', '', [], '', '', '', '', '', [])
  }
}
