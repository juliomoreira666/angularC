import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../../components/foto/foto.component';
import { FotoService } from '../../service/foto.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto: FotoComponent

  // Validação de forms
  formCadastro: FormGroup

  mensagemDoUsuario = ''
  constructor(private formBuilder: FormBuilder, private fotoService: FotoService, private rota: ActivatedRoute, private roteamento: Router) {
    this.foto = new FotoComponent()

    // Validação de forms
    this.formCadastro = formBuilder.group({
      url: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      titulo:['', Validators.required],
      descricao: ['',],
    })
    rota.params.subscribe((parametros) => {
      const idDaFoto = parametros.id;
    })
  }
  ngOnInit() {
    this.rota.params.subscribe((parametros) => {
      const idDaFoto = parametros.id

      if(idDaFoto) {
        this.fotoService.pegaUmaFotoPorID(idDaFoto)
        .subscribe((responseDoServer: HttpResponse<FotoComponent>) => {
          this.foto = responseDoServer.body
        })
      }
    })
  }

  cadastraFoto(event: Event) {
    event.preventDefault()
    console.log('Ta funfando!', this.foto)
if(!this.foto._id) {
  this.fotoService.cadastra(this.foto)
  .subscribe((response) => {
    console.log('retorno do servidor', response)
    this.foto = new FotoComponent()
  } 
)

}
else {
  this.fotoService.alterar(this.foto._id, this.foto)
  .subscribe(() => {
    console.log('Foto alterada com sucesso!')
    this.roteamento.navigate(['/'])
  })
}
  }
}
