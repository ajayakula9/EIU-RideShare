import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../geo.service'

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit, OnDestroy {

  lat: number;
  lng: number;

  markers: any;
  subscription: any;

  constructor(private geo: GeoService) { }

  ngOnInit() {
    this.getUserLocation()
    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits)
  }


  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  private getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;


       this.geo.getLocations(100, [this.lat, this.lng])
     });
   }
   
 }


}