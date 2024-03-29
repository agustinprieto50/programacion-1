import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewPoemComponent } from './pages/view-poem/view-poem.component'
import { UserCrudComponent } from './pages/user-crud/user-crud.component'
import { AuthsessionGuard } from './guards/authsession.guard';



const routes: Routes = [
  // { path: '', component: HomeComponent},
  { path: '', component: HomeComponent },
  { path: 'view-poem/:id', component: ViewPoemComponent},
  { path: 'user-crud', component: UserCrudComponent,canActivate:[AuthsessionGuard]},

//   { path: 'usuarios', component: UsuariosComponent},
//   { path: 'poemas', component: MantenedorPoemasComponent},
//   { path: '**', component: DefaultSinRutaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

