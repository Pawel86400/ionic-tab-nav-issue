import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-top-subpage',
  styleUrls: ['top-subpage.page.scss'],
  templateUrl: 'top-subpage.page.html',
})
export class TopSubpagePage implements OnInit, OnDestroy {
  comingFrom: string;
  name: string;

  constructor(private router: Router, private navCtrl: NavController) {}
  ngOnInit() {
    const state = this.router.getCurrentNavigation().extras.state;
    this.comingFrom = state.hasOwnProperty('comingFrom') ? state['comingFrom'] : '...';
    this.name = state.hasOwnProperty('name') ? state['name'] : 'MISSING NAME....';

    console.log('tab2 > TopSubpagePage Init and coming from ', this.comingFrom);
    console.log('tab2 > TopSubpagePage NAME ', this.name);
  }

  ngOnDestroy() {
    console.log('tab2 > TopSubpageComponent is destroyed')
  }

  goToSubpage() {
    this.navCtrl.navigateForward(['tabs/tab2/top-subpage/subpage'])
  }

  goBack() {
    const backToUrl = (this.name === 'MISSING NAME....' || this.name === 'ROBERT') ? 'tabs/tab2' : 'tabs/tab1/subpage';
    this.navCtrl.navigateBack([backToUrl]);
  }
}
