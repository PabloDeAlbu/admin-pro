import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';

  constructor() { }

  ngOnInit() {
  }


  cambiarValor(valor) {
    if (valor > 0 && this.progreso + valor > 100) {
      this.progreso = 100;
      return;
    }
    if (valor < 0 && this.progreso + valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso += valor;
  }
}
