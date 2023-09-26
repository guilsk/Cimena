import { Injectable } from "@angular/core"

@Injectable({providedIn: 'root'})

export class FavoritosService{
    private chaveLocalStorage = 'filmesFavoritos'

    constructor() { }
  
    adicionarFavorito(filme: any) {
        const favoritos = this.listarFavoritos()
        if (!this.isFilmeFavorito(filme)) {
            favoritos.push(filme)
            localStorage.setItem(this.chaveLocalStorage, JSON.stringify(favoritos))
        }
    }
  
    removerFavorito(filme: any) {
        const favoritos = this.listarFavoritos()
        const index = favoritos.findIndex((fav) => fav.id === filme.id)
        if (index !== -1) {
            favoritos.splice(index, 1)
            localStorage.setItem(this.chaveLocalStorage, JSON.stringify(favoritos))
        }
    }

    isFilmeFavorito(filme: any): boolean {
        const favoritos = this.listarFavoritos()
        return favoritos.some((fav) => fav.id === filme.id)
    }
  
    listarFavoritos(): any[] {
        const favoritos = localStorage.getItem(this.chaveLocalStorage)
        return favoritos ? JSON.parse(favoritos): []
    }
  
  
}