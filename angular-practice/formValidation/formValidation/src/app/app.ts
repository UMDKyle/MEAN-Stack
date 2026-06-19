import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

function passwordMatchValidator(form: AbstractControl): ValidationErrors | null{
  const pwd = form.get('password')?.value;
  const confirmPwd = form.get('confirmPassword')?.value;
  if (pwd !== confirmPwd){
    return {passwordMismatch:true};
  }
  return null;
}

 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  private fb = inject(FormBuilder);
  inputForm: FormGroup = this.fb.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.minLength(6), Validators.required]],
    confirmPassword: ['',[Validators.required]],
    phone: ['',Validators.required],
    contactMethod: ['',[Validators.required]]
  }, {validators: passwordMatchValidator})

  onSubmit(){
    if (this.inputForm.valid){
      this.inputForm.reset();
      alert("Submit success");
    }
    else{
      this.inputForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    this.inputForm.get('contactMethod')?.valueChanges.subscribe(value=>{
      const emailControl = this.inputForm.get('email');
      const phoneControl = this.inputForm.get('phone');
      
      if (value ==='email'){
        emailControl?.setValidators([Validators.required, Validators.email]);
        phoneControl?.clearValidators();
      }
      else if (value === 'phone'){
        phoneControl?.setValidators([Validators.required]);
        emailControl?.clearValidators();
      }
      emailControl?.updateValueAndValidity();
      phoneControl?.updateValueAndValidity();
    });
  }
}
