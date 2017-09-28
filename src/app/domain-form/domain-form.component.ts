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
  domainData: any;

  constructor(private wblService: WebsiteLocationService) {}

  ngOnInit(): void {
    this.domain = '';
    this.searchDomain();
  }

  searchDomain(): void {
    this.wblService.search(this.domain).subscribe( 
      data => {
        this.domainData = data;
        this.wblService.setDomain(this.domainData);
      },
      error => console.log('Error fetching stories')
    );
  }

}
