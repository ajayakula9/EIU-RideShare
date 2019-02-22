import { Component,OnInit } from '@angular/core';
import { GeoService } from '../geo.service'
import { GeoService1 } from '../geo1.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  // title: string = '';
  lat: number ;
  lng: number ;
  markers: any;
  markers1: any;
  subscription: any;
  
  constructor(private geo: GeoService, private geo1: GeoService1) {
    localStorage.clear();
   }
 
  ngOnInit() {
    this.getUserLocation()
    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits)
        this.getUserLocation1()
        this.subscription = this.geo1.hits1
        .subscribe(hits1 => this.markers1 = hits1)
        console.log("ajay:" , this.markers1)
        
        // this.subscription = this.geo.matches
        // .subscribe(matches => this.markers = matches)

  }

  private getUserLocation() {
    /// locate the user
 
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
       this.geo.getLocations(10000, [this.lat, this.lng])

      });
    }

  }


  private getUserLocation1() {
    /// locate the user

    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
       this.geo1.getLocations1(10000, [this.lat, this.lng])

      });
    }

  }
 }
