import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  @Input() value: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() btnClass: string = 'btn-primary';

  @Output() valueOut: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.btnClass = 'btn ' + this.btnClass;
  }


  changeValue(newValue) {
    if (newValue > 0 && this.value + newValue > 100) {
      this.value = 100;
    }
    else if (newValue < 0 && this.value + newValue < 0) {
      this.value = 0;
    } else {
      this.value += newValue;
    }

    console.log(this.value);
    this.valueOut.emit(this.value)

  }

  onChange(newValue: number) {
    if (newValue > 100) {
      newValue = 100;
    }
    else if (newValue < 0) {
      newValue = 0;
    } 
    
    this.value = newValue;

    this.valueOut.emit(this.value)
  }
}
