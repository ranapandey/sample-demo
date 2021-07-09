import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommondDataService {
  selectedData: any;
  addToCartData: any = []
  constructor() { }
}
