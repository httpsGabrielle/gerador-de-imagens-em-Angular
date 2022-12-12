import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Dog } from './dogs';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  private dogUrl ='https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog> {
    return this.http.get<Dog>(this.dogUrl)
 }

}
