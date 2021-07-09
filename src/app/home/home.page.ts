import { Component } from '@angular/core';
import { LoadChildren, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ApiManagerService } from '../api-manager.service';
import { CommondDataService } from '../commond-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cartValue = 0;
  data: any = [];
  userName = "";

  constructor(private router: Router,
    private httpCall: ApiManagerService,
    private toastController: ToastController,
    private lodingCtrl: LoadingController,
    private commonData: CommondDataService) {

  }
  ngOnInit() {

    this.getData();
  }
  ionViewWillEnter() {
    this.userName = localStorage.getItem("username");
    this.cartValue = this.commonData.addToCartData.length
  }
  getData() {
    if (navigator.onLine) {
      this.lodingCtrl.create({
        message: "Please wait..."
      }).then((loadingElement) => {
        loadingElement.present();
        this.httpCall.getCall(
          this.onSuccess,
          this.onFailure
        )

      })
    } else {
      this.presentToast('Please Check your internet connection.')
    }
  }
  onSuccess = (res) => {
    this.lodingCtrl.dismiss();
    this.data = res
  }

  onFailure = (err) => {
    this.lodingCtrl.dismiss();
    console.log(err);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }


  detailClicked(i) {
    this.commonData.selectedData = this.data[i]
    this.router.navigateByUrl('/details')
  }
  addToCartClicked(index) {
    for (let i = 0; i < this.commonData.addToCartData.length; i++) {
      if (this.commonData.addToCartData[i].id == this.data[index].id) {
        this.presentToast('Already added in cart.')
        return
      }
    }
    this.commonData.addToCartData.push(this.data[index]);
    this.cartValue = this.commonData.addToCartData.length
    this.presentToast(this.cartValue + ' item added successfully.')
  }
  cartClicked() {
    if (this.commonData.addToCartData.length == 0) {
      this.presentToast('Your cart is empty')
    } else {
      this.router.navigateByUrl('/cart-list')
    }
  }
}
