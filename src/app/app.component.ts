import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = '';

  onSubmit() {
    console.log(this.email);
  }

  // constructor() {
  //   setInterval(() => {
  //     this.email += 'a';
  //   }, 2000);
  // }
}
