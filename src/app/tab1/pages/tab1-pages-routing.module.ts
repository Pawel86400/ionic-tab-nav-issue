import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabOneSubpagePage } from './tab-one-subpage/tab-one-subpage.page';


const routes: Routes = [
  { component: TabOneSubpagePage, path: '' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class Tab1PagesRoutingModule {}
