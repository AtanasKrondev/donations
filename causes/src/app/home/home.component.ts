import { Component } from '@angular/core';
import { ICause } from '../shared/interfaces/cause';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  // constructor(causesService: CausesService) {
  //   causesService.loadCauses();
  // }
  selectedCause: ICause;


  selectCauseHandler(cause: ICause) {
    this.selectedCause = cause;
  }
}
