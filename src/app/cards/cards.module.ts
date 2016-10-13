import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: CardsComponent }
    ])
  ],
  declarations: [CardsComponent]
})
export class CardsModule { }
