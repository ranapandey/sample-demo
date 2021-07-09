import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { HTTP } from '@ionic-native/http/ngx';
@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  baseURL = 'https://mocki.io/v1/d46dc365-f752-46ee-b0cd-c136aec38e00';
  constructor(
    // private _http: HTTP,
    public http: HttpClient) { }

  getCall(successCallback, failureCallback) {
    this.http.get(this.baseURL)
      .subscribe(data => {
        return successCallback(data);
      }, error => {
        return failureCallback(error);
      });
  }
}
