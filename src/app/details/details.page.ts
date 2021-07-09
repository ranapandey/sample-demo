import { Component, OnInit } from '@angular/core';
import { CommondDataService } from '../commond-data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  productName: any;
  cpu: any;
  screen: any;
  storage: any;
  ram: any;
  description: any;
  video: any;
  userName = "";
  constructor(private commonData: CommondDataService, public domSanitizer: DomSanitizer) {
    console.log(this.commonData.selectedData)
    this.productName = this.commonData.selectedData.productName;
    this.cpu = this.commonData.selectedData.cpu;
    this.screen = this.commonData.selectedData.screen;
    this.storage = this.commonData.selectedData.storage;
    this.ram = this.commonData.selectedData.ram;
    this.description = this.commonData.selectedData.description
    this.video = this.commonData.selectedData.video;
    this.video = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video);

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.userName = localStorage.getItem("username");
  }

}
