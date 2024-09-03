import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.page.html',
  styleUrls: ['./crear-user.page.scss'],
})
export class CrearUserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Hola')
  }
  viajarCambioContrasenia(){
    this.router.navigate(['cambio-contrasenia'])
  }
}
