import { Component, OnInit, Input } from '@angular/core';
import { WebsiteLocationService } from './website-location.service';

import { Observable } from 'rxjs/Observable';

import { DomainData } from './domain-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  @Input() domain: string;
  domainData: any;

  constructor(private wblService: WebsiteLocationService) {}

  ngOnInit(): void {
    this.domain = '';
    this.searchDomain();
  }

  searchDomain(): void {
    this.wblService.search(this.domain).subscribe( 
      data => this.domainData = data,
      error => console.log('Error fetching stories')
    );
  }


}
