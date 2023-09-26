import { Component } from '@angular/core';
import { FavoritosService } from 'src/app/service/favorito.service';

@Component({
  selector: 'app-favorito-filme',
  templateUrl: './favorito-filme.component.html',
  styleUrls: ['./favorito-filme.component.css']
})
export class FavoritoFilmeComponent {
  filmesFavoritos: any[] = [];

  constructor(private favoritoService: FavoritosService) { }

  ngOnInit(): void {
    this.filmesFavoritos = this.favoritoService.listarFavoritos();
  }

  removerDosFavoritos(filme: any) {
    this.favoritoService.removerFavorito(filme);
    this.filmesFavoritos = this.favoritoService.listarFavoritos();
  }
}
