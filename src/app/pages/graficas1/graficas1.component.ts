import { Component } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component {

  public labels1: string[] = ['Descargas', 'En tienda', 'Por mail'];
  public data1 = [[3, 45, 10]];

}
