import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {GeoFire} from "geofire";
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

//declare var SystemJS : any;
//var GeoFire = SystemJS.import('geofire');
import { BehaviorSubject } from 'rxjs'

@Injectable()
  export class GeoService {

    dbRef: any;
    geoFire: any;
    ref: any;
    userref: any;
    hits = new BehaviorSubject([])
    childKey: any;
    chilData: any;
    username: any;
    childdata: any;
    
    


    constructor(private db: AngularFireDatabase) {
      this.dbRef = this.db.list('/lkngride');
      this.geoFire = new GeoFire(this.dbRef.query.ref);
      this.ref = firebase.database().ref();
      this.userref = this.ref.child("lkngride1");
   console.log("geo")

    }
     getLocations(radius: number, coords: Array<number>) {
      this.geoFire.query({
        center: coords,
        radius: radius,

      },

    
    
    
    )
      .on('key_entered', (key: any, location: any, distance: any) => {

        firebase.database().ref('/lkngride1/' + key).on('value', (snapshot) => {
          this.childdata = snapshot.val();
        
          console.log(this.childdata.date)

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
  
        
     
          let currentHits = this.hits.value
          currentHits.push(hit)
          this.hits.next(currentHits)
         
        });

      })
    };
    }



