import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output()
  calculate = new EventEmitter();
  intitialValue = '0';
  annualValue = '0';
  expectedValue = '5';
  durationValue = '0';

  onSubmit() {
    console.log("Submit button clicked");
    console.log("Initial Value: " + this.intitialValue);
    console.log("Annual Value: " + this.annualValue);
    console.log("Expected Value: " + this.expectedValue);
    console.log("Duration Value: " + this.durationValue);
  }
}
