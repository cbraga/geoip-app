import { Component, OnInit } from '@angular/core';
import { WebsiteLocationService } from '../website-location.service';

import { DomainData } from '../domain-data';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  domainData: any;

  constructor(private wblService: WebsiteLocationService) {}

  ngOnInit() {
    this.wblService.currentDomainData.subscribe( 
      data => this.domainData = data,
      error => console.log('Error fetching stories')
    );
  }

}
