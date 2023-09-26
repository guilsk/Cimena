import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Artista } from 'src/app/model/artista';
import { Filme } from 'src/app/model/filme';
import { FavoritosService } from 'src/app/service/favorito.service';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.css']
})
export class DetalhesFilmeComponent implements OnInit{

  @Input() filme: any = {
    id: 0,
    nomePt: '',
    nomeOriginal: '',
    generos: [],
    sinopse: '',
    posterUrl: '',
    videoUrl: '',
    anoLancamento: '',
    diretor: ''
  }
  favorito: boolean = false

  constructor(private route: ActivatedRoute, private filmeService: FilmeService, private sanitizer: DomSanitizer, private favoritoService: FavoritosService){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string

    this.filmeService.pesquisarPorId(id).subscribe((filme) => {
      this.filme = filme
      this.favorito = this.favoritoService.isFilmeFavorito(this.filme)
    })

    this.filmeService.pesquisarDiretor(id).subscribe((diretor) => {
      this.filme.diretor = diretor
    })
    
    this.filmeService.pesquisarElenco(id).subscribe((elenco) => {
      this.filme.elenco = elenco
      console.log('Elenco: '+this.filme.elenco)
    })

    this.filmeService.pesquisarVideo(id).subscribe((video) => {
      this.filme.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.key)
    })
  }

  adicionarAosFavoritos(filme: Filme) {
    this.favoritoService.adicionarFavorito(filme);
    this.favorito = true;
    this.salvarFavoritosNoLocalStorage();
  }

  removerDosFavoritos(filme: Filme) {
    this.favoritoService.removerFavorito(filme);
    this.favorito = false;
    this.salvarFavoritosNoLocalStorage();
  }

  toggleFavorito(filme: Filme) {
    if (this.favoritoService.isFilmeFavorito(filme)) {
      this.favoritoService.removerFavorito(filme);
    } else {
      this.favoritoService.adicionarFavorito(filme);
    }


    this.favorito = this.favoritoService.isFilmeFavorito(filme);


    this.salvarFavoritosNoLocalStorage();
  }

  private salvarFavoritosNoLocalStorage() {
    const favoritos = this.favoritoService.listarFavoritos();
    localStorage.setItem('filmesFavoritos', JSON.stringify(favoritos));
  }
}
