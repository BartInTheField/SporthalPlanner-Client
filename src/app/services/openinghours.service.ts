import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class OpeningHoursService {
    private headers = new Headers({ 'Content-Type' : 'application/json'});
    private serverUrl = environment.serverUrl + '/openinghours';
}
