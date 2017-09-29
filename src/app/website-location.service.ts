import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';

import { DomainData } from './domain-data';

@Injectable()
export class WebsiteLocationService {

  domainData: any;
  private apiHost: string = "http://freegeoip.net/json/";
  private domainDataSource = new BehaviorSubject<any>(this.domainData);
  currentDomainData = this.domainDataSource.asObservable();

  constructor(private http: Http) {}

  validateUserInput(domain: string): string {
    if (domain.toLowerCase().startsWith('http://')) return domain.slice(7);
    return domain;
  }

  search(domain: string): Observable<any> {
    const validatedDomain = this.validateUserInput(domain);
    console.log(validatedDomain);

    return this.http
                .get(`${this.apiHost}${validatedDomain}`)
                .map(response => response.json());
  }

}

