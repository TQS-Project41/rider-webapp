import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  error_name: Boolean = false;
  error_email: Boolean = false;
  error_password: Boolean = false;
  error_birthday: Boolean = false;
  error_diff_password: Boolean = false;
  error_register: boolean = false;
  success: boolean = false;

  constructor(private fb: FormBuilder, private location: Location, private service: AuthService) { 
    this.registerForm = this.fb.group({
      name: [null],
      email: [null],
      password:[null],
      birthdate:[null]
    });
  }


  ngOnInit(): void {
  }

  register() {

    this.reset();

    if (!this.registerForm.value["name"]) this.error_name = true;

    if (!this.registerForm.value["email"]) this.error_email = true;

    if (!this.registerForm.value["password"]) {
      this.error_password = true;
    }
    else if ( (<HTMLInputElement>document.getElementById("pass_again")).value !== this.registerForm.value["password"]) {
      this.error_diff_password = true;
    }

    if (!this.registerForm.value["birthdate"]) {
      this.error_birthday = true;

    }
    else {
      var today = new Date();
      today.setHours(0,0,0,0);
      var bday = new Date(this.registerForm.value["birthdate"]);
      if(bday >= today) this.error_birthday = true;
      this.registerForm.value["birthdate"] = bday;
    }

    if (this.allValid()) {
      let str = JSON.stringify(this.registerForm.value);
      let json = JSON.parse(str);

      let bday = formatDate(json["birthdate"], 'dd-MM-yyyy', 'en_US')
      json["birthdate"] = bday

      json["photo"] = ""
      
      this.service.register(json).subscribe({
        next: (info: any) => {
          this.success = true;
          
          localStorage.setItem('token', info["token"]);
          setTimeout( function(){
            window.location.href = "/"
          }, 1000);
        }, 
        error: (error) => {
          console.log(error);
          this.error_register = true;
        }
      });
      
    }
  }

  reset() {
    this.error_name = false;
    this.error_email = false;
    this.error_password = false;
    this.error_birthday = false;
    this.error_diff_password = false;
    this.error_register = false;
  }

  allValid() {
    return (!this.error_name && !this.error_email && !this.error_password && !this.error_birthday && !this.error_diff_password);
  }

  back(): void {
    this.location.back();
  }

}
