import { Observable, map } from "rxjs"
import { Filme } from "../model/filme"
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class FilmeService {

    chave = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjYzMTRmODdjYzAzZWIzOGQ5M2FlNzNhN2EwODVlYSIsInN1YiI6IjY0Zjc3OTFlNGNjYzUwMDEzODhjZjMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KVSgGIzzpgGgi7p12FG2DBh8yT76qWE8_ITI8L6UBdw'

    constructor(private http: HttpClient) {}

    PesquisarListaEmAlta(): Observable<Filme[]> {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1'

        return this.http.get<any>(url,this.obterHeaderAutorizacao()).pipe(
            map(res => res.results),
            map(objetos => this.mapearLista(objetos))
        )

    }

    private obterHeaderAutorizacao() {
        return {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${this.chave}`
            }
        }
    }


    mapearLista(obj: any[]): Filme[] {
        return obj.map(obj => {
            return {

                id: obj.id,
                nomePt: obj.title,
                nomeOriginal: obj.original_title,
                generos: ['', ''],
                sinopse: obj.overview,
                posterUrl: "https://image.tmdb.org/t/p/original/" + obj.poster_path,
                videoUrl: "https://www.youtube.com/embed/",
                anoLancamento: obj.release_date,
                diretor: "",
                elenco: []
            }
        })
    }
}