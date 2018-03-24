import { Pipe } from '@angular/core'
import { FotoComponent } from '../foto/foto.component';

@Pipe({
    name: 'filtraPorTitulo'
})
export class FiltraPorTituloPipe {
    transform(fotos: any, inputDoUsuario) {
        return fotos.filter((foto) => {
            if (foto.titulo) {
                return foto.titulo.toLowerCase().includes(inputDoUsuario.toLowerCase())
            }
            return true
        })
    }
}
