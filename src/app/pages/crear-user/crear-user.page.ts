import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.page.html',
  styleUrls: ['./crear-user.page.scss'],

})
export class CrearUserPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  AlertaPasswordVisible: boolean = false;
  LoadingVisible: boolean = false;
  WarningCampos: boolean = false;
 

  constructor(private router: Router, private userService: UserService, private alertController: AlertController) { }

  ngOnInit() {
    console.log('Hola')
  }
  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'El usuario se ha creado con éxito.',
      buttons: ['OK'] // Configuración del botón OK
    });

    await alert.present();
  }

  limpiar(){
    this.username = "";
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
    this.AlertaPasswordVisible = false;
    this.WarningCampos = false;

  }

  

  createUser(){
    if(this.username== "" || this.email =="" || this.password=="" || this.confirmPassword ==""){
      this.WarningCampos = true;
    } 
    else{
      if (this.password === this.confirmPassword) {
        console.log('Nombre de usuario:', this.username);
        console.log('Email:', this.email);
        console.log('Contraseña:', this.password);
        
        var usuarionuevo ={
          nuevo_username: this.username,
          nuevo_email: this.email,
          nuevo_password: this.password
        };
         this.userService.setUser(usuarionuevo);
        // Aquí puedes agregar la lógica para guardar el usuario en tu backend o base de datos.
        
        this.presentSuccessAlert();
        setTimeout(() => {
          this.router.navigate(["login"]);
        }, 2000);
        
      } else {
          console.log('Las contraseñas no coinciden');
          this.WarningCampos = true;
          this.LoadingVisible = false;
          this.AlertaPasswordVisible = true;
        // Muestra un mensaje de error al usuario
      }
      
    }
  }
}
