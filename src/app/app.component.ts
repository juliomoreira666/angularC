import { Component, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaelumPic';

  fotos: any = [
    {url: '/assets/img/images2.jpg', descricao:'Vazia por que sim'},
    {url: '/assets/img/images2.jpg', descricao:'Vazia por que sim'},
    {url: '/assets/img/images2.jpg', descricao:'Vazia por que sim'}
  ]

  constructor(httpClient: HttpClient) {
    httpClient.get('http://localhost:3000/v1/fotos')
    .subscribe((dados) => {
      console.log('Retornou', this);
      this.fotos = dados
    })
  }
}
