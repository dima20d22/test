import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent {
  public first: number = 1;
  public second: number = 1;

  public operation: string = '+';

  public operations: string[] = ['+', '-', '*', '/'];

  public answer?: number;

  public calc() {
    switch (this.operation) {
      case '+':
        this.answer = this.first + this.second;
        break;
      case '-':
        this.answer = this.first - this.second;
        break;
      case '*':
        this.answer = this.first * this.second;
        break;
      case '/':
        this.answer = this.first / this.second;
        break;
    }
  }
}
