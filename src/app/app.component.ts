import { Component, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(private platform: Platform, private router: Router, private alertCtrl: AlertController, private location: Location) {
    this.platform.ready().then(() => {
      let username = localStorage.getItem("username")
      this.backButtonEvent()
      console.log(username)
      if (username) {
        this.router.navigateByUrl('/home')
      } else {
        this.router.navigateByUrl('/login')
      }
    });
  }
  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(9999, () => {
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (this.router.url == '/login' || this.router.url == '/dashboard' || this.router.url == '/tnc-page') {
          // navigator['app'].exitApp();
          this.confirmExitApp();
        }
        else {
          this.location.back();
        }
      });

    });
  }
  async confirmExitApp() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Exit',
      message: 'Are you sure you want to exit?',
      buttons: [
        {
          text: 'Yes',
          handler: () => { //takes the data
            navigator['app'].exitApp();
          }
        },
        {
          text: 'No',
          handler: () => {

          }
        }
      ],
      backdropDismiss: true
    });
    await alert.present();
  }
}
