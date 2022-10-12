import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignedInComponent } from './pages/signed-in/signed-in.component';
import { ViewPoemComponent } from './pages/view-poem/view-poem.component';
import { UserCrudComponent } from './pages/user-crud/user-crud.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    SignedInComponent,
    ViewPoemComponent,
    UserCrudComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
