import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto: FotoComponent
  mensagemDoUsuario = ''
  constructor(private httpClient: HttpClient) {
    this.foto = new FotoComponent()
  }
  ngOnInit() {
  }


  cadastraFoto(event: Event) {
    event.preventDefault()
    console.log('Ta funfando!', this.foto)

    const cabecalho = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    this.httpClient.post('http://localhost:3000/v1/fotos',
      JSON.stringify(this.foto),
      {
        headers: cabecalho
      })
      .subscribe(
        (response) => {
          console.log('Retorno', response)
          this.foto = new FotoComponent()

          this.mensagemDoUsuario = 'Foi criada a foto com id ' + response
        }
      )
  }
}
