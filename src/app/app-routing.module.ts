import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiPageComponent } from './api-page/api-page.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'main', component: MainPageComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'apiPage', component: ApiPageComponent  },
  { path: '', component: LoginComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
