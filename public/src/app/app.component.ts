import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManager';

  constructor(private http: HttpService, private router: Router) {}

  onLogout() {
    this.http.logout();
    console.log('logged out');
    this.router.navigate(['/']);
  }
}
