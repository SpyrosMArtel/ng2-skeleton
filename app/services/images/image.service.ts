/**
 * Created by spyrosmartel on 2016-07-01.
 */
import { Injectable } from '@angular/core';
import { Image } from './image';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ImageService {

    constructor(private http: Http) {}

    getImages(imagesUrl) : Promise<Image[]> {
        return this.http.get(imagesUrl)
                .toPromise()
                .then(response => response.json())
                .catch(this.handleError);
    };

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}