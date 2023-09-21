import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/model/filme';
import { FilmeService } from 'src/app/service/filme.service';

@Component({
  selector: 'app-lista-filme',
  templateUrl: './lista-filme.component.html',
  styleUrls: ['./lista-filme.component.css']
})
export class ListaFilmeComponent implements OnInit {

  filmes: Filme[] = [];

  constructor(private filmeService: FilmeService) {}

  ngOnInit(): void {
    this.GerarListaEmAlta()
  }

  GerarListaEmAlta(): any {
    this.filmeService.PesquisarListaEmAlta().subscribe((filmes) => {
      this.filmes = filmes;
      console.log(this.filmes);
    });

  }

}
