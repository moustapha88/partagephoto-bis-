import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
