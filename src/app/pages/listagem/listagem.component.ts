import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FotoService } from '../../service/foto.service';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
fotos: FotoComponent[] = []
  constructor(private httpClient: HttpClient, private fotoService: FotoService) {
    console.log('Constructor')
   }

  ngOnInit() {
    console.log('NgOnInit')
    this.fotoService.lista()
        .subscribe((dados: HttpResponse<FotoComponent[]>) => {
          console.log('Retornou', dados)
          this.fotos = dados.body
        })
  }
  removerFotos(idDaFotoRemovida) {
    console.log('TEste', idDaFotoRemovida);

    const fotosAtualizadas = this.fotos.filter((foto)=> {
      if (foto._id === idDaFotoRemovida) {
        return false;
      }
      return true
    })
    this.fotos = fotosAtualizadas
  }
}

