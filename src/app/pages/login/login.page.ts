import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_email: string = '';
  mdl_pass: string = '';
  warningVisible: boolean = false;
  loadingVisible: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    console.log('xD')
  }

  esconderWarning(){
    this.warningVisible = false;

  }
  createViajar(){
    this.router.navigate(['crear-user'])
  }

  login() {
    this.warningVisible = false;
    this.loadingVisible = true;

    setTimeout(() => {
      const storedUser = this.userService.getUser();
      if (storedUser && this.mdl_email === storedUser.nuevo_email && this.mdl_pass === storedUser.nuevo_password) {
        //NAVEGACION CON PARÁMETROS
        //valores que viajaran a otra paginas (extras)
        //let permite crear variables que solo se utilizaran en una sola ocasión, luego se esfuma
        let extras: NavigationExtras={
          state:{
            "usuario":this.mdl_email,
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
