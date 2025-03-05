import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { AppStateInterface } from '../../../shared/types/appState.interface';
import { CommonModule } from '@angular/common';
import { authFeature } from '../../store/features';
import { registerActions } from '../../store/register.action';
import { AuthService } from '../../services/auth.service';
import { RegisterRequestinterface } from '../../types/registerRequest.interface';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  providers: [FormBuilder, AuthService],
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
    private store: Store<AppStateInterface>,
    private authService: AuthService
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
    const request: RegisterRequestinterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerActions.register({ request }));
  }
}
