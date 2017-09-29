import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { WebsiteLocationService } from '../website-location.service';

import { DomainData } from '../domain-data';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {

  lat: number = 51.678418;
  lng: number = 7.809007;

  @Input() domainData: any;

  constructor(private wblService: WebsiteLocationService) {}

  ngOnInit() {
    this.wblService.currentDomainData.subscribe( 
      data => this.domainData = data,
      error => console.log('Error fetching stories')
    );
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      console.log(`Map: Initial value of ${propName} set to ${to}`);
    }

    this.lat = this.domainData.latitude;
    this.lng = this.domainData.longitude;
  }

}
