import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

    constructor(private http: HttpClient) {}

    getAllFaceSnaps(): Observable<FaceSnap[]> {
      return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
      return this.getAllFaceSnaps().pipe(
           map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
           map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
           map(previousFacesnap => ({
              id: previousFacesnap.id + 1,
              ...formValue,
              snaps: 0,
              createdDate: new Date(),
              
          })),
          switchMap(newFacesnap => this.http.post<FaceSnap>(
              'http://localhost:3000/facesnaps',
              newFacesnap)
          )
      );
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
      return this.getFaceSnapById(faceSnapId).pipe(
          map(faceSnap => ({
              ...faceSnap,
              snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
          })),
          switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
              `http://localhost:3000/facesnaps/${faceSnapId}`,
              updatedFaceSnap)
          )
      );
  }
  
}