import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignedInComponent } from './pages/signed-in/signed-in.component';
import { ViewPoemComponent } from './pages/view-poem/view-poem.component';
import { UserCrudComponent } from './pages/user-crud/user-crud.component';
import { UserComponent } from './pages/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpModalComponent } from './components/sign-up-modal/sign-up-modal.component';
import { LogInModalComponent } from './components/log-in-modal/log-in-modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PoemCardComponent } from './components/poem-card/poem-card.component';
import { SingedInHeaderComponent } from './components/singed-in-header/singed-in-header.component';
import { ItemsPerPageComponent } from './components/items-per-page/items-per-page.component';
import { AddPoemBtnComponent } from './components/add-poem-btn/add-poem-btn.component';
import { AddPoemFormComponent } from './components/add-poem-form/add-poem-form.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    SignedInComponent,
    ViewPoemComponent,
    UserCrudComponent,
    UserComponent,
    HeaderComponent,
    SignUpModalComponent,
    LogInModalComponent,
    PaginationComponent,
    PoemCardComponent,
    SingedInHeaderComponent,
    ItemsPerPageComponent,
    AddPoemBtnComponent,
    AddPoemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }