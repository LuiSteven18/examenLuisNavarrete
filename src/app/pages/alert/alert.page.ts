import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage='';
  roleMessage='';

  constructor(private alertaCtrl: AlertController) { }

  ngOnInit() {
  }
    async alertaButtonAction() {
    const alert = await this.alertaCtrl.create({
    backdropDismiss:false,
    header: 'Prompt!',
    inputs:[
      {
        placeholder: 'Nombres',
      },
      {
        placeholder: 'Apellidos',
      },
      {
        placeholder: 'Descripción Materia',
      },
      {
        type: 'url',
        placeholder: 'https://ionicframework.com/',
      },
      {
        type: 'date',
      },
      {
        type: 'password',
        placeholder: 'Clave',
      },
      {
        placeholder: 'Nickname (max 8 Characters)',
        attributes: {
          maxlenght:8,
        }
      },
      {
        placeholder: 'Edad',
      },

    ],

    buttons: [
      {
      text: 'CANCEL',
      handler: () => {
      console.log('Clic Cancelar');
      }
      },
      {
        text: 'OK',
        role: 'Ok',
        cssClass: 'rojo'
      }
    ]

    });
      await alert.present();
    }     
}
