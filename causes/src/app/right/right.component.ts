import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CausesService } from '../causes.service'
// import { ICause } from '../shared/interfaces/cause';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
  // @Input() selectedCause2: ICause;

  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;

  get colorIndication() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) { return 'highAmount' };
    if (this.selectedCause.collectedAmount <= (this.selectedCause.neededAmount / 3)) { return 'lowAmount'; }
    return 'middleAmount';
  }

  get selectedCause() {
    return this.causesService.selectedCause;
  }

  constructor(private causesService: CausesService) { }

  ngOnInit() {
  }

  makeDonationHandler() {
    this.causesService.donate(+this.amountInput.nativeElement.value).subscribe((cause) => {
      this.causesService.loadCauses();
      this.amountInput.nativeElement.value = '';
      this.causesService.selectedCause = cause;
    });
  }
}
