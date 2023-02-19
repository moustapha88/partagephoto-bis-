import { Component } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';



@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[];
  
  constructor(private faceSnapsService: FaceSnapsService) { }
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
}
