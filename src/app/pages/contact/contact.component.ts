import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', Validators.required]
    });
   }

  get f() { return this.contactForm.controls; }

  ngOnInit(): void {
  }


  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
        return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value, null, 4));
    location.href="mailto:laddha.pranita1988@gmail.com?subject="+ this.contactForm.get('subject').value + "?body=" + this.contactForm.get('message').value;
  }

  onReset() {
    this.submitted = false;
    this.contactForm.reset();
}
}
