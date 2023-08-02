import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'


@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.css']
})
export class LogInModalComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [""],
      password:[""]
    })
     
   }

  login (dataLogin:any) {
    console.log("comprobando credenciales...")
    this.authService.login(dataLogin).subscribe({
      next: (rta) => {
        console.log("Login exitoso",rta)
        localStorage.setItem("token",rta.access_token)
        localStorage.setItem('user_id', rta.id)
        localStorage.setItem("admin",rta.admin)
        this.router.navigate([''])

      }, error: (error) => {
        alert("Credenciales incorrectas")
        console.log(error)
        localStorage.removeItem("token")
      
      }, complete: ()=>{
        console.log("Termino")
      }
    })
  }
  submit() {
    if (this.loginForm.valid) {
        console.log(this.loginForm.value);
        let email = this.loginForm.value.email;
        let password = this.loginForm.value.password;

        // console.log('Credenciales: ', {email, password});
        this.login({email, password});
        
      }
      else{
        alert("Formulario invalido")
      }
    }  


  }
  


