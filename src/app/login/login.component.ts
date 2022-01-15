import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loader: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
      console.log("yes");
    }, 2000);
  }

}
