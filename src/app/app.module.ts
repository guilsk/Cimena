import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { PaginacaoComponent } from './shared/paginacao/paginacao.component';
import { CardFilmeComponent } from './shared/card-filme/card-filme.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './core/navbar/navbar.component';
import { DetalhesFilmeComponent } from './view/detalhes-filme/detalhes-filme.component';
import { ListaFilmeComponent } from './shared/lista-filme/lista-filme.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginacaoComponent,
    CardFilmeComponent,
    NavbarComponent,
    DetalhesFilmeComponent,
    ListaFilmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
