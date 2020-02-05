import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CausesService } from 'src/app/cause/causes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cause-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef<HTMLInputElement>;

  isRouteComponent = false;

  get colorIndication() {
    if (this.selectedCause.collectedAmount >= this.selectedCause.neededAmount) { return 'highAmount' };
    if (this.selectedCause.collectedAmount <= (this.selectedCause.neededAmount / 3)) { return 'lowAmount'; }
    return 'middleAmount';
  }

  get selectedCause() {
    return this.causesService.selectedCause;
  }

  constructor(
    private causesService: CausesService,
    private activatedRoute: ActivatedRoute) {
    this.isRouteComponent = this.activatedRoute.snapshot.data.shouldFetchCause;
  }

  ngOnInit() {
    if (this.isRouteComponent) {
      this.causesService.load(+this.activatedRoute.snapshot.params.id).subscribe(() => {
        this.causesService.selectCause(this.causesService.causes[0]);
      })
    };
  }

  makeDonationHandler() {
    this.causesService.donate(+this.amountInput.nativeElement.value).subscribe((cause) => {
      this.causesService.load();
      this.amountInput.nativeElement.value = '';
      this.causesService.selectCause(cause);
    });
  }

}
