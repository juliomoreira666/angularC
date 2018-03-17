import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaelumPic';

  fotos = [
    {url: '/assets/img/images2.jpg', descricao:'Vazia por que sim'},
    {url: '/assets/img/images2.jpg', descricao:'Vazia por que sim'},
    {url: '/assets/img/images2.jpg', descricao:'Vazia por que sim'}
  ]
}
