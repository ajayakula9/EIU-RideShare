import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptorProvider, ErrorInterceptorProvider } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import { ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { GeoService } from './geo.service';
import { GeoService1 } from './geo1.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { OfrrideComponent } from './ofrride/ofrride.component';
import { LkngrideComponent } from './lkngride/lkngride.component';
import { environment } from '../environments/environment'
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GooglePlacesDirective } from './google-places.directive';

import { GeocodeService } from './geocode.service';
import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    MapsComponent,
    OfrrideComponent,
    LkngrideComponent,
    GooglePlacesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDlPQGJpBUU4W6MH66DAHbodW6YpWCbGcA'
    })
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    GeoService,
    GeoService1,
    JwtInterceptorProvider,
    AngularFireDatabase,
    ErrorInterceptorProvider,
    GeocodeService,
    CamelizePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }