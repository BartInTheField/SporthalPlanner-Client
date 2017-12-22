import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { OpeningHours } from '../models/openingHours.model';

@Injectable()
export class OpeningHoursService {
    openingHoursChanged = new Subject<OpeningHours[]>();
    private headers = new Headers({ 'Content-Type' : 'application/json'});
    private serverUrl = environment.serverUrl + '/openinghours';

    private openingHours: OpeningHours[] = [];

    constructor(private http: Http) {}

    /**
     * getOpeningHoursAsync. Returns a promise
     */
    public getOpeningHoursAsync(): Promise<OpeningHours[]> {
        return this.http.get(this.serverUrl, {headers : this.headers})
        .toPromise()
        .then((response) => {
            this.openingHours = response.json() as OpeningHours[];
            this.openingHoursChanged.next(this.openingHours);
        })
        .catch((error) => {
            return this.handleError(error);
        });
    }

    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
    }
}
