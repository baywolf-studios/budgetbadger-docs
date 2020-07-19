import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocviewComponent } from './docview/docview.component';

const routes: Routes = [
  { path: ':path', component: DocviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
