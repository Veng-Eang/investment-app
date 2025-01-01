import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserInputComponent],
})
export class AppComponent {
  calculateInvestment(data: {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualIvestment: number;
  }) {
    const { initialInvestment, duration, expectedReturn, annualIvestment } = data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);

      investmentValue += interestEarnedInYear + annualIvestment;
      const totalInterest = investmentValue - initialInvestment * year - initialInvestment;
      annualData.push({
        year:year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualIvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualIvestment * year,
      });
    }
  }
}
