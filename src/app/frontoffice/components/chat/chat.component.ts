import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  formGroup!: FormGroup;
  telephoneRegExp!: RegExp;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    //77 539 24 82
    this.telephoneRegExp = /[0-9]{9}/;
    //creation dynamique des champs
    this.formGroup = this.fb.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telephone: ['', Validators.required,Validators.pattern(this.telephoneRegExp)],
        message: ['', Validators.required],
      }
    )
  }


  onSubmit(value: any) {
    // console.log(value)
    console.log(this.formGroup.value);
    console.log(this.formGroup.hasError);
    console.log(this.formGroup);
  }
}
