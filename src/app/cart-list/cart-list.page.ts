import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CommondDataService } from '../commond-data.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.page.html',
  styleUrls: ['./cart-list.page.scss'],
})
export class CartListPage implements OnInit {
   userName = "";
  constructor(private commonData: CommondDataService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.userName = localStorage.getItem("username");
  }
  detailClicked(i) {
    this.commonData.selectedData = this.commonData.addToCartData[i]
    this.router.navigateByUrl('/details')
  }
  removeClicked(i) {
    this.commonData.addToCartData.splice(i, 1);
    this.presentToast('Item removed successfully.')
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
