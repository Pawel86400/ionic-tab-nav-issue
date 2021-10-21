import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { TopSubpagePage } from './top-subpage/top-subpage.page';
import { Tab2PagesRoutingModule } from './tab2-pages-routing.module';

@NgModule({
  declarations: [TopSubpagePage],
  imports: [ Tab2PagesRoutingModule, CommonModule, IonicModule],
})
export class Tab2PagesModule {}
