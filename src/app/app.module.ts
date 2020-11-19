import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsService } from './services/posts/posts.service';
import { PostItemComponent } from './components/postComponent/post-item/post-item.component';
import { AuthService } from './services/auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterService } from './services/register/register.service';
import { ApiPageComponent } from './api-page/api-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './profileComponents/userProfile/user-profile/user-profile.component';
import { ChangePasswordComponent } from './profileComponents/changePass/change-password/change-password.component';
import { ChangeNameComponent } from './profileComponents/change-name/change-name.component';
import { ChangeTelNumberComponent } from './profileComponents/change-tel-number/change-tel-number.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    RegisterComponent,
    PostItemComponent,
    ApiPageComponent,
    DialogComponent,
    ProfileComponent,
    UserProfileComponent,
    ChangePasswordComponent,
    ChangeNameComponent,
    ChangeTelNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,

  ],
  providers: [PostsService,RegisterService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
