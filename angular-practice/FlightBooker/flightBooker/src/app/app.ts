import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

function notPastDate(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if(!value){
    return null;
  }
  const today = new Date();
  today.setHours(0,0,0,0);

  const inputDate = new Date(value);
  if (inputDate<today){
    return {pastDate: true};
  }
  return null;
}

function returnAfterDeparture(group: AbstractControl): ValidationErrors | null{
  const departure = group.get('departureDate')?.value;
  const returnD = group.get('returnDate')?.value;
  if (!departure||!returnD){
    return null;
  }
  if (new Date(returnD)<new Date(departure)){
    return {returnBeforeDeparture:true};
  }
  return null;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private fb = inject(FormBuilder);
  flightForm: FormGroup = this.fb.group({
    flightType: ['one-way',[Validators.required]],
    departureDate: ['',[Validators.required, notPastDate]],
    returnDate: ['']
  }, { validators: returnAfterDeparture });

  submitted = false;
  onSubmit() {
    if(this.flightForm.valid){
      console.log(this.flightForm.value);
      this.submitted = true;
      alert('Book success!');
    }
    else{
      this.flightForm.markAllAsTouched();
    }

  }
}
