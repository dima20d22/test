import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';
import { selectIsSubmitting } from '../../store/selectors';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { CommonModule } from '@angular/common';
import { authFeature } from '../../store/reducers';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  providers: [FormBuilder],
  selector: 'ms-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmiting$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmiting$ = this.store.select(authFeature.selectIsSubmitting);
    console.log(this.isSubmiting$);
  }

  initializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.valid);
    this.store.dispatch(registerAction(this.form.value));
  }
}
