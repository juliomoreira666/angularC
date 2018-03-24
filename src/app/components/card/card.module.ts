import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { FiltraPorTituloPipe } from './filtraPorTitulo.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardComponent, FiltraPorTituloPipe],
  exports: [CardComponent, FiltraPorTituloPipe]
})
export class CardModule { }
