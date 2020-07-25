import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() btnClass: string = 'btn-primary';

  @Output() valueOut: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.btnClass = 'btn ' + this.btnClass;
  }


  changeValue(valor) {
    if (valor > 0 && this.progreso + valor > 100) {
      this.progreso = 100;
    }
    else if (valor < 0 && this.progreso + valor < 0) {
      this.progreso = 0;
    } else {
      this.progreso += valor;
    }
    
    console.log(this.progreso);
    this.valueOut.emit(this.progreso)

  }
}
