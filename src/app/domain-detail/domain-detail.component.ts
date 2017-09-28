import { Component, OnInit, Input } from '@angular/core';
import { WebsiteLocationService } from '../website-location.service';

import { DomainData } from '../domain-data';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.css']
})
export class DomainDetailComponent implements OnInit {

  @Input() domainData: any;

  constructor(private wblService: WebsiteLocationService) {}

  ngOnInit() {
    this.wblService.currentDomainData.subscribe( 
      data => this.domainData = data,
      error => console.log('Error fetching stories')
    );
  }

}
