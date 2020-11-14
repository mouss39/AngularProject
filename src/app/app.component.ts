import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp1';

  constructor(private authService: AuthService, private router: Router) {
  }


logout() {
 
    localStorage.removeItem("currentUser");
    this.router.navigate(['/']);
 
}

isAuthenticated() {
  return this.authService.isAuthenticated();
}

}
