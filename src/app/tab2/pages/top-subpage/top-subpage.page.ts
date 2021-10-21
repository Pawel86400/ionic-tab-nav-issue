import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-subpage',
  styleUrls: ['top-subpage.page.scss'],
  templateUrl: 'top-subpage.page.html',
})
export class TopSubpagePage implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('here');
  }

  ngOnDestroy() {
    console.log('TopSubpageComponent is destroyed')
  }
}
