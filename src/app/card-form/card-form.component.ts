import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    // initial value of name is empty string ''
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      // Validators.maxLength(5),
      // Validators.pattern(/\s/),
    ]),
    cardNumber: new FormControl(''),
    expiration: new FormControl(''),
    securityCode: new FormControl(''),
  });
  constructor() {
    console.log(this.cardForm.get('name')); // FormControl instance
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form was submitted');
  }
}
