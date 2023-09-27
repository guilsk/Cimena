import { Component, EventEmitter, Output } from '@angular/core'
import { FilmeService } from 'src/app/service/filme.service'

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent {
  paginas: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  @Output() onEnviarPagina = new EventEmitter<number>();
  @Output() onEnviarComando = new EventEmitter<string>();

  constructor(private filmeService: FilmeService){}

  irParaPagina(id: any){
    this.onEnviarPagina.emit(id)
  }

  avancarPagina(){
    this.onEnviarComando.emit('avancar')
  }
  
  voltarPagina(){
    this.onEnviarComando.emit('voltar')
  }
  
  ultimaPagina(){
    this.onEnviarComando.emit('ultima')
  }
  
  primeiraPagina(){
    this.onEnviarComando.emit('primeira')
  }
}
