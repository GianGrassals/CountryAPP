import { Country } from './../interfaces/country.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // Base URL
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  httpParams = new HttpParams()
    .set('fields','name;capital;alpha2Code;flag;population');

  constructor(private http: HttpClient) { }


  searchCountry( term: string ):Observable<Country[]> {

    const url = `${this.apiUrl}/name/${ term }`
    return this.http.get<Country[]>( url, {params: this.httpParams} );

  }

  searchCapital( term: string ):Observable<Country[]> {



    const url = `${this.apiUrl}/capital/${ term }`
    return this.http.get<Country[]>( url, {params: this.httpParams} );

  }

  getCountryByAlpha( id: string ):Observable<Country> {

    const url = `${this.apiUrl}/alpha/${ id }`
    return this.http.get<Country>( url );

  }

  searchRegion( region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${ region }`;
    return this.http.get<Country[]>( url, {params: this.httpParams});
  }


}
