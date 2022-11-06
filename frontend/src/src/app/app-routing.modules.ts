import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignedInComponent } from './pages/signed-in/signed-in.component'
import { ViewPoemComponent } from './pages/view-poem/view-poem.component'
import { UserComponent } from './pages/user/user.component'
import { UserCrudComponent } from './pages/user-crud/user-crud.component'




const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'signed-in', component: SignedInComponent},
  { path: 'view-poem', component: ViewPoemComponent},
  { path: 'user/:id', component: UserComponent},
  { path: 'user-crud', component: UserCrudComponent},

//   { path: 'usuarios', component: UsuariosComponent},
//   { path: 'poemas', component: MantenedorPoemasComponent},
//   { path: '**', component: DefaultSinRutaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

