import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SignupService } from './../../services/signup.service'
@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.css']
})
export class SignUpModalComponent implements OnInit {
  signUpForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private SignupService:SignupService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username:[""],
      email: [""],
      password:[""]
    })
  }
  signUp(dataSignUp:any){
    console.log(dataSignUp)
    this.SignupService.signUp(dataSignUp).subscribe({
      next: (rta) => {
        console.log("SignUp exitoso",rta)
        alert("SignUp exitoso")

      }, error: (error) => {
        alert("Datos incorrectos")
        console.log(error)
      
      }, complete: ()=>{
        console.log("Termino")
      }
    })
    

  }
  submit() {
    if (this.signUpForm.valid) {
        let alias = this.signUpForm.value.username;
        let email = this.signUpForm.value.email;
        let password = this.signUpForm.value.password;

        // console.log('Credenciales: ', {email, password});
        this.signUp({alias, email, password});
        
      }
      else{
        alert("Formulario invalido")
      }
    }  

}
