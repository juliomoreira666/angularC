import { Component, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FotoComponent } from './components/foto/foto.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaelumPic';

  fotos: FotoComponent[] = []

  constructor(httpClient: HttpClient) {
    httpClient.get('http://localhost:3000/v1/fotos', { observe: 'response' })
      .subscribe((dados: HttpResponse<FotoComponent[]>) => {
        console.log('Retornou', this);
        this.fotos = dados.body
      })
  }
}
