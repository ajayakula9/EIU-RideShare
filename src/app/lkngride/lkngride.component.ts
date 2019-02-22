import { Component, OnInit, ChangeDetectorRef, Input, OnDestroy} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable} from 'rxjs';
import * as firebase from 'firebase/app';
import { Time } from '@angular/common';
import { GeoFire } from "geofire";
import { BehaviorSubject } from 'rxjs';
import { GeocodeService } from '../geocode.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-lkngride',
  templateUrl: './lkngride.component.html',
  styleUrls: ['./lkngride.component.css']
})
export class LkngrideComponent implements OnInit, OnDestroy {

  dbRef: any;
  geoFire: any;
  userId:any;
  testRef:any;
  usersRef:any;
  address: any;
  firstname: any;
  geo: any;
  // location: {lat: number, lng: number};
  loading: boolean;

  location: string;

locationSubject: Subject<any>;

  isPositionError: boolean = false;

	lat: any;
  lng: any;
  geo1: Array<{id: number, text: string}>;
  constructor(private db: AngularFireDatabase,
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
  ) {
    this.dbRef = this.db.list('/lkngride');
    this.geoFire = new GeoFire(this.dbRef.query.ref);
    var database = firebase.database();
   
  }
  
  ngOnInit() {
    if (this.locationSubject) {
      this.locationSubject.subscribe((location: string) => {
        // this.location = "India"
        this.getLocation(location,this.firstname);
      });
    }
  }

  ngOnDestroy() {
    if (this.locationSubject) {
      this.locationSubject.unsubscribe();
    }
  }

  getLocation(location,firstname) {
    
    this.geocodeService.getGeoLocation(location).subscribe(
      (coordinates) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
        this.geo1 = [this.lat,this.lng]
        this.geoFire.set(firstname,this.geo1)
        this.ref.detectChanges();
      }, () => {
        this.isPositionError = true;
      });
  }

 lkngride(firstname,lastname, fplace, tplace, date,time,seates,phone,email) {
  this.getLocation(fplace,firstname)
  firebase.database().ref('lkngride1/' + firstname).set({
  username: firstname,  
  fplace: fplace,
  tplace: tplace,
  date: date,
  time: time,
  seates: seates,
  phone: phone,
  email: email
    });
  }
}





