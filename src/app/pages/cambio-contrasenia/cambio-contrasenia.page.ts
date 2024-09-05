import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-cambio-contrasenia',
  templateUrl: './cambio-contrasenia.page.html',
  styleUrls: ['./cambio-contrasenia.page.scss'],
})
export class CambioContraseniaPage implements OnInit {

  password: string = '';
  newPassword: string = '';
  newConfirmPassword: string = '';
  AlertaPasswordVisible: boolean = false;
  LoadingVisible: boolean = false;
  WarningCampos: boolean = false;

constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    console.log('Hola cambio contraseña')
  }

  cambiarContrasena(){
    const storedUser = this.userService.getUser();
    if (storedUser && this.password === storedUser.nuevo_password) {

      if(this.password== "" || this.newPassword =="" || this.newConfirmPassword=="" ){
        this.WarningCampos = true;
      } else{
        if (this.newPassword === this.newConfirmPassword) {
          storedUser.nuevo_password = this.newPassword;
          this.userService.setUser(storedUser);
        
          setTimeout(() => {
          this.router.navigate(["principal"]);
        }, 2000);
        
      } else {
          console.log('Las contraseñas no coinciden');
          this.WarningCampos = true;
          this.LoadingVisible = false;
          this.AlertaPasswordVisible = true;
        // Muestra un mensaje de error al usuario
      };
    }
  
      }else{
        console.log('Ingreso de contraseña actual incorrecto');
};
}
}