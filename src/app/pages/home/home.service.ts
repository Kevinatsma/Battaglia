import { Injectable, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IContentModel } from './../../shared/models/general.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnDestroy {
  content$: Observable<any>;
  destroy$: Subject<boolean> = new Subject();

  constructor(private afs: AngularFirestore) {
    this.initContent();
  }

  initContent() {
    this.content$ = this.afs.doc<IContentModel>(`content/home`).valueChanges().pipe(
      takeUntil(this.destroy$)
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
