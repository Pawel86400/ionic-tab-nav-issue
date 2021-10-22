import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopSubpagePage } from './top-subpage/top-subpage.page';
import { SubpagePage } from './subpage/subpage.page';


const routes: Routes = [
  { component: TopSubpagePage, path: '' },
  { component: SubpagePage, path: 'subpage' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class Tab2PagesRoutingModule {}
