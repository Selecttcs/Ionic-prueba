import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  usuario: string = '';
  pass: string = '';
  msj: string = '';

  navHome(){
    this.router.navigate(['login'])
  }
  

  constructor(private router:Router, private userService: UserService){
   
  }

  ngOnInit() {
    // RESCATAMOS VALORES DE NAVEGACIÓN "PREVIA"
    let extras = this.router.getCurrentNavigation()?.extras;

    if(extras?.state){
      this.usuario = extras?.state["usuario"];
      this.pass = extras?.state["contrasena"];
      this.msj = extras?.state["mensaje"];
    }

    console.log('USUARIO: ' + this.usuario)
    console.log('CONTRASENA: ' + this.pass)
    console.log('MENSAJE: ' + this.msj)
    const user = this.userService.getUser();
    if (user && user.nuevo_username) {
      this.usuario = user.nuevo_username;
    }
  }
  viajarCambioContrasenia(){
    this.router.navigate(['cambio-contrasenia'])
  }





}
