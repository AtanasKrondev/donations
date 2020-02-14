import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../error-styles.scss']
})
export class RegisterComponent implements OnInit {
  emailRegex = /[a-zA-Z0-9.-_]{3,}@gmail\.com/g;

  constructor() { }

  ngOnInit() {
  }

}
