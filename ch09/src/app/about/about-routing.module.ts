import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutInfoComponent } from './about-info/about-info.component';

const routes: Routes = [
  // Route activated by default
  { path: '', component: AboutInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
