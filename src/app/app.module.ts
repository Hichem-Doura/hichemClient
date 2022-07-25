import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListProgrammeComponent } from './Programme/list-programme/list-programme.component';
import { FooterComponent } from './footer/footer.component';
import { AuthentifComponent } from './authentif/authentif.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SignupComponent } from './signup/signup.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListProgrammeComponent,
    FooterComponent,
    AuthentifComponent,
    LoginComponent,
    ForgotpasswordComponent,
    AcceuilComponent,
    SignupComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
