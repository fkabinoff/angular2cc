import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    RouterModule.forChild([
      { path: '', component: MovieComponent }
    ])
  ],
  declarations: [MovieComponent]
})
export class MovieModule { }
