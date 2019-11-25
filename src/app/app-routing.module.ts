import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { Body2Component } from './body2/body2.component';


const routes: Routes = [ 
  { path: 'body', component: BodyComponent },
  { path: 'body2', component: Body2Component},
  { path: '**', redirectTo: 'body' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
