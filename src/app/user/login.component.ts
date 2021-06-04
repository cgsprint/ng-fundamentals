import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent{
    userName
    password

    constructor(private authServie:AuthService, private router:Router){

    }

    login(formValues)
    {
        this.authServie.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cancel(){
        this.router.navigate(['events'])
    }
}