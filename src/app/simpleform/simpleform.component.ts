import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css'],
})
export class SimpleformComponent implements OnInit {
  myform!: FormGroup;

  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        this.passwordValidate(),
      ]),
      agree: new FormControl('', Validators.required),
    });
  }

  get controls() {
    return this.myform.controls;
  }

  passwordValidate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordcontrol = control.value;
      return passwordcontrol.length < 10
        ? { passwordValidator: { value: false } }
        : null;
    };
  }

  onSubmit(myform: FormGroup) {
    console.log(myform.value);
  }
}
