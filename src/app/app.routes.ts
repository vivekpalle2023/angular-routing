import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { authGuard } from './gaurd/auth.guard';

export const routes: Routes = [
{path: 'login', component:LoginComponent},
{path: 'forget-password', component: ForgetPasswordComponent},
{path: 'admin', canActivate: [authGuard],
loadChildren: ()=>{
    return import('./modules/admin/admin.module').then((m) => m.AdminModule);
}},
{path:'', redirectTo:'/login', pathMatch:'full'},
{path:'**', component:NotFoundComponent}
];
