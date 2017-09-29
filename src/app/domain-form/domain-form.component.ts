import { Component, OnInit, Input } from '@angular/core';
import { WebsiteLocationService } from '../website-location.service';

import { DomainData } from '../domain-data';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-domain-form',
  templateUrl: './domain-form.component.html',
  styleUrls: ['./domain-form.component.css']
})
export class DomainFormComponent implements OnInit {

  @Input() domain: string;

  myLocation: string;
  domainData: any;
  myLocationData: any;

  constructor(private wblService: WebsiteLocationService) {
    this.domain = '';
    this.myLocation = '';    
    this.searchDomain();
  }

  ngOnInit(): void {}

  searchDomain(host: string = this.domain): void {
    this.wblService.search(host).subscribe( 
      data => this.domainData = data,
      error => console.log('Error fetching Domain')
    );
  }

}
