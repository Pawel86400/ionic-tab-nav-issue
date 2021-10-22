import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subpage',
  styleUrls: ['subpage.page.scss'],
  templateUrl: 'subpage.page.html',
})
export class SubpagePage implements OnInit, OnDestroy {
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
