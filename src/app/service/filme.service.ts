import { Observable, map, tap } from "rxjs"
import { Filme } from "../model/filme"
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { Artista } from "../model/artista";

@Injectable({
    providedIn: 'root',
})

export class FilmeService {

    chave = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjYzMTRmODdjYzAzZWIzOGQ5M2FlNzNhN2EwODVlYSIsInN1YiI6IjY0Zjc3OTFlNGNjYzUwMDEzODhjZjMyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KVSgGIzzpgGgi7p12FG2DBh8yT76qWE8_ITI8L6UBdw'
    page: number

    constructor(private http: HttpClient) {
        this.page = 1
    }

    pesquisarPorId(id: string): Observable<Filme> {
        const url = 'https://api.themoviedb.org/3/movie/' + id + '?language=pt-BR';
        return this.http.get<any>(url, this.obterHeaderAutorizacao()).pipe(
            map(obj => this.mapearFilme(obj)),
        )
    }

    PesquisarListaPopulares(): Observable<Filme[]> {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=' + this.page
        console.log(url)
        return this.http.get<any>(url,this.obterHeaderAutorizacao()).pipe(
            map(res => res.results),
            map(objetos => this.mapearLista(objetos))
        )
    }

    PesquisarListaMaisAssistidos(): Observable<Filme[]> {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=' + this.page
        return this.http.get<any>(url,this.obterHeaderAutorizacao()).pipe(
            map(res => res.results),
            map(objetos => this.mapearLista(objetos))
        )
    }

    PesquisarFilme(id: any): Observable<Filme[]>{
        const url = `https://api.themoviedb.org/3/search/movie?query='${id}'&include_adult=true&language=pt-PT`;
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
            }
        })
    }

    mapearFilme(obj: any): Filme {
        const nomesDosGeneros = obj.genres.map((genero: any) => genero.name)

        return {
            id: obj.id,
            nomePt: obj.title,
            nomeOriginal: obj.original_title,
            generos: nomesDosGeneros,
            sinopse: obj.overview,
            posterUrl: "https://image.tmdb.org/t/p/original/" + obj.poster_path,
            videoUrl: "https://www.youtube.com/embed/",
            anoLancamento: obj.release_date,
        }
    }

    pesquisarElenco(id: any): Observable<Artista[]>{
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR`

        return this.http.get<any>(url, this.obterHeaderAutorizacao()).pipe(
            map(res => res.cast),
            map(obj => obj)
        )
    }

    pesquisarDiretor(id: any): Observable<Artista> {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=pt-BR`

        return this.http.get<any>(url, this.obterHeaderAutorizacao()).pipe(
            map(res => res.crew),
            map(obj => this.mapearDiretor(obj)),
            tap(obj => console.log(obj))
        )
    }

    mapearDiretor(obj: any[]): Artista {
        return obj.find(d => d.department === "Directing") as Artista
    }

    pesquisarVideo(id: any): Observable<any> {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`

        return this.http.get<any>(url, this.obterHeaderAutorizacao()).pipe(
            map(obj => obj.results),
            map(obj => this.mapearTrailer(obj)),
        )
    }

    mapearTrailer(obj: any[]): string{
        return obj.find(video => video.type === "Trailer") as string
    }    


}