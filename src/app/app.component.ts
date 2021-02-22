import {Component, HostListener} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private snackBar: MatSnackBar) {}

  @HostListener('document:click', ['$event'])
  documentClick(): void {
    this.snackBar.open('Starting app, please be patient...', 'Ok', {
      duration: 5000
    });
    window.document.location.href = 'https://botte-micidiali.herokuapp.com';
  }
}
