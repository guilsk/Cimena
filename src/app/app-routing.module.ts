import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CardFilmeComponent } from './shared/card-filme/card-filme.component'
import { ListaFilmeComponent } from './shared/lista-filme/lista-filme.component'
import { HomeComponent } from './view/home/home.component'
import { DetalhesFilmeComponent } from './view/detalhes-filme/detalhes-filme.component'
import { FavoritoFilmeComponent } from './view/favorito-filme/favorito-filme.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view/home/popular',
    pathMatch: 'full'
  },
  {
    path: 'view/home/:tipo',
    component: HomeComponent
  },
  {
    path: 'shared/card-filme',
    component: CardFilmeComponent
  },
  {
    path: 'shared/lista-filme',
    component: ListaFilmeComponent
  },
  {
    path: 'view/detalhes-filme/:id',
    component: DetalhesFilmeComponent
  },
  {
    path: 'view/favorito-filme',
    component: FavoritoFilmeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
