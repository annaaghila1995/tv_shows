import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowListComponent } from './show-list/show-list.component';
import { InnerLayoutComponent } from './app-layout/inner-layout/inner-layout.component';

const routes: Routes = [
  {
    path: '',
    component: InnerLayoutComponent,
    children: [
      {
        path: '',
        component: ShowListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
