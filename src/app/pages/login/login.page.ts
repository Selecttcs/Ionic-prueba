import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = '';
  mdl_pass: string = '';
  warningVisible: boolean = false;
  loadingVisible: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('xD')
  }

  login() {
    this.warningVisible = false;
    this.loadingVisible = true;

    setTimeout(() => {
      if(this.mdl_user == "admin" && this.mdl_pass == "admin") {
        //NAVEGACION CON PARÁMETROS
        //valores que viajaran a otra paginas (extras)
        //let permite crear variables que solo se utilizaran en una sola ocasión, luego se esfuma
        let extras: NavigationExtras={
          state:{
            "usuario":this.mdl_user,
            "contrasena":this.mdl_pass,
            "mensaje": "Hola, Soy un mensaje"
          },
          replaceUrl:true
        }


        this.router.navigate(["principal"], extras);
      } else {
        this.warningVisible = true;
      }

      this.loadingVisible = false;
    }, 2000);
  }

}
