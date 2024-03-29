import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.modules';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewPoemComponent } from './pages/view-poem/view-poem.component';
import { UserCrudComponent } from './pages/user-crud/user-crud.component';
import { HeaderComponent } from './components/header/header.component';
import { SignUpModalComponent } from './components/sign-up-modal/sign-up-modal.component';
import { LogInModalComponent } from './components/log-in-modal/log-in-modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PoemCardComponent } from './components/poem-card/poem-card.component';
import { ItemsPerPageComponent } from './components/items-per-page/items-per-page.component';
import { AddPoemBtnComponent } from './components/add-poem-btn/add-poem-btn.component';
import { AddPoemFormComponent } from './components/add-poem-form/add-poem-form.component';
import { OrderByComponent } from './components/order-by/order-by.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddReviewFormComponent } from './components/add-review-form/add-review-form.component';
import { AddReviewBtnComponent } from './components/add-review-btn/add-review-btn.component';


import { FiltersComponent } from './components/filters/filters.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ReviewsEmptyStateComponent } from './components/reviews-empty-state/reviews-empty-state.component';
import { DeletePoemFormComponent } from './components/delete-poem-form/delete-poem-form.component';
import { DeleteUserFormComponent } from './components/delete-user-form/delete-user-form.component';
import { DeleteReviewFormComponent } from './components/delete-review-form/delete-review-form.component';
import { CrudFiltersComponent } from './components/crud-filters/crud-filters.component';

@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    ViewPoemComponent,
    UserCrudComponent,
    HeaderComponent,
    SignUpModalComponent,
    LogInModalComponent,
    PaginationComponent,
    PoemCardComponent,
    ItemsPerPageComponent,
    AddPoemBtnComponent,
    AddPoemFormComponent,
    OrderByComponent,
    ReviewCardComponent,
    FiltersComponent,
    AddReviewFormComponent,
    AddReviewBtnComponent,
    UsersTableComponent,
    ReviewsEmptyStateComponent,
    DeletePoemFormComponent,
    DeleteUserFormComponent,
    DeleteReviewFormComponent,
    CrudFiltersComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // ActivatedRoute
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
