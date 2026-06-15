import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
monthlyPayment = signal<number|null>(null);
totalPayment = signal<number|null>(null);
totalInterest = signal<number|null>(null);


  protected readonly title = signal('mortgage-calculator');
  private fb = inject(FormBuilder);
  mortgageForm: FormGroup = this.fb.group({
    loanAmount: [null, [Validators.required, Validators.min(1)]],
    interestRate: [null, [Validators.required, Validators.min(0.01), Validators.max(100)]],
    loanTerm: [null, [Validators.required, Validators.min(1)]]
  });

  calculate(): void{
    if (this.mortgageForm.invalid){
      return;
    }
    const {loanAmount, interestRate, loanTerm} = this.mortgageForm.value;
    const p = loanAmount;
    const i = interestRate/100/12;
    const n = loanTerm*12;

    const m = (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    this.monthlyPayment.set(parseFloat(m.toFixed(2)));
    this.totalPayment.set(parseFloat((m * n).toFixed(2)));
    this.totalInterest.set(parseFloat((m * n - p).toFixed(2)));
  }
}
