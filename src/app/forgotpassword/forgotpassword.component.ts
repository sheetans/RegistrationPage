import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { MustMatch } from '../mustmatch';
import {ForgotModel} from './forgotmodel';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotModel: ForgotModel = new ForgotModel();
  forgotForm:FormGroup;
  submitted = false; 

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      OTP : ['', [Validators.required,Validators.minLength(6)]],

    },
      { validator: MustMatch('password', 'confirmPassword') }
    );
  }
  
  get f() { return this.forgotForm.controls; }

  onSubmit(model) {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
    this.forgotModel = new ForgotModel();
  }

}
