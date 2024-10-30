import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutForm!: FormGroup;
  submitted = false;

  userData = {
    email: '',
  };

  newData = {
    email: '',
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.aboutForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.aboutForm.get('email')?.valueChanges.subscribe((value) => {
      this.userData.email = value;
    });
  }

  handleLogin() {
    this.submitted = true;
    if (this.aboutForm.invalid) {
      return;
    } else {
      this.newData.email = this.aboutForm.value.email;

      if (this.newData.email) {
        alert(`Login success: ${this.newData.email}`);
      }
    }
  }
}
