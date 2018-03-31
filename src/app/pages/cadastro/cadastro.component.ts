import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../service/foto.service';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto: FotoComponent
  mensagemDoUsuario = ''
  constructor(private fotoService: FotoService) {
    this.foto = new FotoComponent()
  }
  ngOnInit() {
  }


  cadastraFoto(event: Event) {
    event.preventDefault()
    console.log('Ta funfando!', this.foto)


      this.fotoService.cadastra(this.foto).subscribe(
        (response) => {
          console.log('Retorno', response)
          this.foto = new FotoComponent()

          this.mensagemDoUsuario = 'Foi criada a foto com id ' + response
        }
      )
  }
}
