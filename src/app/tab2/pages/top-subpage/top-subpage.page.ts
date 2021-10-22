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

  constructor(private router: Router, private navCtrl: NavController) {}
  ngOnInit() {
    const state = this.router.getCurrentNavigation().extras.state;
    this.comingFrom = state.hasOwnProperty('comingFrom') ? state['comingFrom'] : '...';

    console.log('TopSubpagePage Init and coming from ', this.comingFrom);
  }

  ngOnDestroy() {
    console.log('TopSubpageComponent is destroyed')
  }

  goToSubpage() {
    this.router.navigate(['tabs/tab2/top-subpage/subpage'])
  }

  goBack() {
    this.navCtrl.back();
  }
}
