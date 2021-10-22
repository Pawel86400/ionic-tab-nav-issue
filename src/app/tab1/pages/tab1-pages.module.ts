import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { Tab1PagesRoutingModule } from './tab1-pages-routing.module';
import { TabOneSubpagePage } from './tab-one-subpage/tab-one-subpage.page';

@NgModule({
  declarations: [TabOneSubpagePage],
  imports: [ Tab1PagesRoutingModule, CommonModule, IonicModule],
})
export class Tab1PagesModule {}
