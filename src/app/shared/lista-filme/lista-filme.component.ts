import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Filme } from 'src/app/model/filme';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css']
})
export class ListaFilmeComponent implements OnInit {

  filmes: Filme[] = [];

  constructor(private filmeService: FilmeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.CarregarFilmes()
  }

  CarregarFilmes(){
    this.route.paramMap.subscribe((params) => {
      const tipo = params.get('tipo')

      if(tipo == "populares"){
        this.GerarListaPopulares()
      }else if(tipo == "maisassistidos"){
        this.GerarListaMaisAssistidos()
      }else{
        this.Pesquisar(tipo)
      }
    })
  }

  GerarListaPopulares(): any {
    this.filmeService.PesquisarListaPopulares().subscribe((filmes) => {
      this.filmes = filmes
      console.log(this.filmes)
    })
  }

  GerarListaMaisAssistidos(): any{
    this.filmeService.PesquisarListaMaisAssistidos().subscribe((filmes) => {
      this.filmes = filmes
      console.log(this.filmes)
    })
  }

  Pesquisar(tipo: string | null): any{
    this.filmeService.PesquisarFilme(tipo).subscribe((filmes) => {
      this.filmes = filmes
      console.log(this.filmes)
    })
  }
}
