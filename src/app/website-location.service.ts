import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DomainData } from './domain-data';

@Injectable()
export class WebsiteLocationService {

  constructor(private http: Http) {}

  validateUserInput(domain: string): string {
    if (domain.toLowerCase().startsWith('http://www.')) return domain.slice(11);
    else if (domain.toLowerCase().startsWith('http://')) return domain.slice(7);
    return domain;
  }

  search(domain: string): Observable<any> {
    const validatedDomain = this.validateUserInput(domain);
    console.log(validatedDomain);

    return this.http
                .get(`http://freegeoip.net/json/${validatedDomain}`)
                .map(response => response.json());
  }

}

