import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab-one-subpage',
  styleUrls: ['tab-one-subpage.page.scss'],
  templateUrl: 'tab-one-subpage.page.html',
})
export class TabOneSubpagePage implements OnInit, OnDestroy {
  popularNames = ['Ben', 'John', 'Steven'];
  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    console.log('tab1 > SubpagePage Init');
  }

  ngOnDestroy() {
    console.log('tab1 > SubpagePage is destroyed')
  }

  goToTabTwoSubpage(name){
    this.navCtrl.navigateForward(['tabs/tab2/top-subpage'], { state: { comingFrom: 'tab 1', name }})
  }

  goBack() {
    this.navCtrl.navigateBack(['tabs/tab2/top-subpage']);
  }
}
