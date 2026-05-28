import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule,Validators, FormBuilder } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { JsonPipe, NgIf } from '@angular/common';
import { ValidationErrors, AbstractControl} from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../model/user';
import * as alertify from 'alertifyjs';
import { AlertifyService } from '../../services/alertify.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
standalone: true,
  styleUrls: ['./user-register.component.css'],
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, JsonPipe,NgIf]
})
export class UserRegisterComponent implements OnInit {
  registrationForm!:FormGroup;
  user: User = {
    username: '',
    email: '',
    password: '',
    mobile: 0
  };
  userSubmited:boolean=false;
  constructor(private fb:FormBuilder,
              private userService:UserServiceService,
              private alertify:AlertifyService
  ) { }

  ngOnInit() {
    this.createregistionForm();
  }
  createregistionForm(){
    this.registrationForm=this.fb.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
      confirmpassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required,Validators.pattern('^[0-9]{10}$')])
    },
    {
      validators: this.passwordMatchingValidator
    });
  }
  get username(){
    return this.registrationForm.get('username') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmpassword(){
    return this.registrationForm.get('confirmpassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
  return fc.get('password')?.value === fc.get('confirmpassword')?.value? null: { notmatched: true };
  }
  onSubmit(){
     this.userSubmited=true;
    if(this,this.registrationForm.valid){
      this.userService.adduser(this.userData());
      this.registrationForm.reset();
      this.userSubmited=false;
      this.alertify.success('Congrats, you are successfully registered');
    }
    else{
      this.alertify.error('Kindly provide the required fields');
    }
  }
  userData():User{
    return this.user={
      username:this.username.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }
  }
}
