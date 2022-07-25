import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'registration/', component: AuthentifComponent },
  {path:'login/forgotpassword/', component: ForgotpasswordComponent },
  {path:'acceuil', component: AcceuilComponent},
  {path:'signup', component: SignupComponent},
  {path:'profil', component: ProfilComponent},
  {path:'membre', component: ProfilComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }