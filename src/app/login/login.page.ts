import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommondDataService } from '../commond-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userName: any = "";
  password: any = "";
  constructor(private router: Router, private commonData: CommondDataService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.commonData.addToCartData = new CommondDataService().addToCartData;
    this.commonData.selectedData = new CommondDataService().selectedData;
  }
  login() {
    if (this.userName == "RanaPratap" && this.password == "Rana123") {
      localStorage.setItem("username", "RanaPratap");
      this.router.navigateByUrl('/home')
    } else {
      alert('Invalid Credientials')
    }
  }
}
