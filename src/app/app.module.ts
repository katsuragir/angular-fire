import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { PerformanceModule } from '@angular/fire/performance';
import { PerformanceMonitoringService } from '@angular/fire/compat/performance';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyA5tOcOXKIpCaB0JILzxSUCXtnzC8Vsfec',
      authDomain: 'monitoring-angular-website.firebaseapp.com',
      projectId: 'monitoring-angular-website',
      storageBucket: 'monitoring-angular-website.appspot.com',
      messagingSenderId: '509463034815',
      appId: '1:509463034815:web:42b220e4f7c101654f7f0a',
      measurementId: 'G-N4H2TN4DH7',
    }),
    PerformanceModule,
  ],
  providers: [PerformanceMonitoringService],
  bootstrap: [AppComponent],
})
export class AppModule {}
