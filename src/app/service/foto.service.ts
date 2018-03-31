
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoComponent } from "../components/foto/foto.component";

@Injectable()
export class FotoService {
    constructor(private httpClient: HttpClient) {}

    lista(): Observable<Object> {
        return this
        .httpClient
        .get('http://localhost:3000/v1/fotos', {observe: 'response'})
    }

    cadastra(foto: FotoComponent) {
        const cabecalho = new HttpHeaders({
            'Content-Type': 'application/json'
          })
        return this.httpClient.post('http://localhost:3000/v1/fotos',
        JSON.stringify(foto),
        {
          headers: cabecalho
        })

    }
    deletar(idDaFoto: string): Observable<Object> {
        return this.httpClient.delete(`http://localhost:3000/v1/fotos/${idDaFoto}`, {observe: 'response'})
    }
}