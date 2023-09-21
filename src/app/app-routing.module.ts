import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CardFilmeComponent } from './shared/card-filme/card-filme.component'
import { ListaFilmeComponent } from './shared/lista-filme/lista-filme.component'
import { HomeComponent } from './view/home/home.component'
import { DetalhesFilmeComponent } from './view/detalhes-filme/detalhes-filme.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view/home',
    pathMatch: 'full'
  },
  {
    path: 'view/home',
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
    path: 'shared/detalhes-filme',
    component: DetalhesFilmeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
