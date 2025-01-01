import { InvestmentInput } from './../investment-input.model';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  investmentService = inject(InvestmentService);
  intitialValue = signal('0');
  annualValue = signal('0');
  expectedValue = signal('5');
  durationValue = signal('10');

  onSubmit() {
    const investmentInput: InvestmentInput = {
      initialInvestment: parseFloat(this.intitialValue()),
      annualInvestment: parseFloat(this.annualValue()),
      expectedReturn: parseFloat(this.expectedValue()),
      duration: parseFloat(this.durationValue())
    };
    this.investmentService.onCalculateInvestmentResults(investmentInput);
  }

}
