import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { WebsiteLocationService } from './website-location.service';
import { DomainFormComponent } from './domain-form/domain-form.component';
import { DomainDetailComponent } from './domain-detail/domain-detail.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    DomainFormComponent,
    DomainDetailComponent,
    MapComponent
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
