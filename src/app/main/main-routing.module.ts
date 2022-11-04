import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from '../components/child/child.component';
import { Child1Component } from '../components/child1/child1.component';

const routes: Routes = [
  {path:'' ,component:ChildComponent},
  {path:'assign' ,component:Child1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
