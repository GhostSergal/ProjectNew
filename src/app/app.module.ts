import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule,FirestoreSettingsToken } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    YoutubeVideoPlayer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue:{} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
