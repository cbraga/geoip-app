import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { WebsiteLocationService } from '../website-location.service';

import { DomainData } from '../domain-data';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.css']
})
export class DomainDetailComponent implements OnInit, OnChanges {

  @Input() domainData: any;

  ip: string = '0.0.0.0';
  country: string = '';
  region: string = '';
  city: string = '';
  zipCode: string = '';
  latitude: number = 0;
  longitude: number = 0;

  constructor(private wblService: WebsiteLocationService) {}

  ngOnInit(): void {
    this.wblService.currentDomainData.subscribe( 
      data => this.domainData = data,
      error => console.log('Error fetching stories')
    );
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      console.log(`Initial value of ${propName} set to ${to}`);
    }

    this.ip = this.domainData.ip;
    this.country = this.domainData.country_name;
    this.region = this.domainData.region_name;
    this.city = this.domainData.city;
    this.zipCode = this.domainData.zip_code;
    this.latitude = this.domainData.latitude;
    this.longitude = this.domainData.longitude;
  }

}
