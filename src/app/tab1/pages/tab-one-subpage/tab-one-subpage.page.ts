import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-one-subpage',
  styleUrls: ['tab-one-subpage.page.scss'],
  templateUrl: 'tab-one-subpage.page.html',
})
export class TabOneSubpagePage implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log('SubpagePage Init');
  }

  ngOnDestroy() {
    console.log('SubpagePage is destroyed')
  }

  goBack() {
    this.router.navigate(['tabs/tab2/top-subpage']);
  }
}
