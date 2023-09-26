import { Component, Input, Output } from '@angular/core';
import { Filme } from 'src/app/model/filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent {
  @Input() filme: Filme = {
    id: 0,
    nomePt: '',
    nomeOriginal: '',
    generos: [],
    sinopse: '',
    posterUrl: '',
    videoUrl: undefined,
    anoLancamento: ''
  }
}
