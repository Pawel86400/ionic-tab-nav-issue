import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-subpage',
  styleUrls: ['subpage.page.scss'],
  templateUrl: 'subpage.page.html',
})
export class SubpagePage implements OnInit, OnDestroy {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    console.log('tab2 > SubpagePage Init');
  }

  ngOnDestroy() {
    console.log('tab2 > SubpagePage is destroyed')
  }

  goBack() {
    this.navCtrl.navigateForward(['tabs/tab2/top-subpage']);
  }
}
