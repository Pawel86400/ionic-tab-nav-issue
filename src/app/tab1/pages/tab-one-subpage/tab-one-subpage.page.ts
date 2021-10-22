import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-one-subpage',
  styleUrls: ['tab-one-subpage.page.scss'],
  templateUrl: 'tab-one-subpage.page.html',
})
export class TabOneSubpagePage implements OnInit, OnDestroy {
  popularNames = ['Ben', 'John', 'Steven'];
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('tab1 > SubpagePage Init');
  }

  ngOnDestroy() {
    console.log('tab1 > SubpagePage is destroyed')
  }

  goToTabTwoSubpage(name){
    this.router.navigate(['tabs/tab2/top-subpage'], { state: { comingFrom: 'tab 1', name }})
  }

  goBack() {
    this.router.navigate(['tabs/tab2/top-subpage']);
  }
}
