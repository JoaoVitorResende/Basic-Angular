import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  SumValues() {
    this.result = this.num1 + this.num2;
  }
  SubtractValues() {
    this.result = this.num1 - this.num2;
  }
  DividValues() {
    this.result = this.num1 / this.num2;
  }
  MultiplyValues(){
      this.result = this.num1 * this.num2;
  }
}
