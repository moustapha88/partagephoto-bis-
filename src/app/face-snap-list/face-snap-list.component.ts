import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { interval, Observable, Subject, takeUntil, tap } from 'rxjs';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy{
  
  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;
  
  constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
  
  ngOnInit(): void {
    //this.faceSnaps = this.faceSnapsService.faceSnaps;
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
    this.destroy$ = new Subject<boolean>();
    interval(1000).pipe(
      tap(console.log),
      takeUntil(this.destroy$)
    ).subscribe();
  }
}
