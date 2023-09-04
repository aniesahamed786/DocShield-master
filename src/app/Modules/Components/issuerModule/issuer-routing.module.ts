import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../home/home.component';
import { DoctypesComponent } from '../doctypes/doctypes.component';
import { IssuedocComponent } from '../issuedoc/issuedoc.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent,
    children:[
      {
        path:"home",
        component:HomeComponent
      },
      {
        path:"doctype",
        component:DoctypesComponent
      },
      {
        path:"issuedoc",
        component:IssuedocComponent
      }
    ]
  },
  // {
  //   path:"home",
  //   component:HomeComponent,
  // }
  
   
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuerRoutingModule { }
