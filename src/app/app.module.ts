import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { WebsiteLocationService } from './website-location.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfA04csiSUFNXhUZBqKPEDcaugSwH1sg4'
    })
  ],
  providers: [WebsiteLocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
