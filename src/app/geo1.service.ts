import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {GeoFire} from "geofire";
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
//declare var SystemJS : any;
//var GeoFire = SystemJS.import('geofire');
import { BehaviorSubject } from 'rxjs'
@Injectable()
  export class GeoService1 {
    dbRef: any;
    geoFire: any;
    ref: any;
    userref: any;
    hits1 = new BehaviorSubject([])
    childKey: any;
    chilData: any;
    username: any;
    childdata: any;
    
    constructor(private db: AngularFireDatabase) {
      this.dbRef = this.db.list('/oferride');
      this.geoFire = new GeoFire(this.dbRef.query.ref);
      this.ref = firebase.database().ref();
      this.userref = this.ref.child("oferride1");
      console.log("geo1")
    }
     getLocations1(radius: number, coords: Array<number>) {
        console.log("geo1")
      this.geoFire.query({

        center: coords,
        radius: radius,
      },
      console.log("geo1")
    )

      .on('key_entered', (key: any, location: any, distance: any) => {
        console.log("geo1")

       

        firebase.database().ref('/oferride1/' + key).on('value', (snapshot) => {
          this.childdata = snapshot.val();
        
          console.log(this.childdata)

          var hit = {
            location: location,
            distance: distance,
            name: this.childdata.username,
            fplace: this.childdata.fplace,
            tplace: this.childdata.tplace,
            date: this.childdata.date,
            time: this.childdata.time,
            seat: this.childdata.seates,
            email: this.childdata.email,
            phone: this.childdata.phone
            }
            console.log("geo1")
          let currentHits = this.hits1.value
          currentHits.push(hit)
          this.hits1.next(currentHits)
        });
      })
    };
    }



