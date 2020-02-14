import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { CauseRoutingModule } from './cause-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [CreateComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    CauseRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [ListComponent, DetailComponent]
})
export class CauseModule { }
