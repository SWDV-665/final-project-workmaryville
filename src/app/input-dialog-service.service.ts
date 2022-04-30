import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ContactserviceService } from './contactservice.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertController: AlertController, public dataService: ContactserviceService) { }

  async presentPrompt(item?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit Item' : 'Add Item',
      message: item ? 'Please edit item below.' : 'Please add item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Contact Name',
          value: item ? item.name : null
        },
        {
          name: 'Phone_number',
          type: 'tel',
          placeholder: 'Phone Number',
          attributes: {
                maxLength: 11,
                min: 10
                      },
          value: item ? item.Phone_number : null
        },
        {
          name: 'Address',
          type: 'text',
          placeholder: 'Address',
          value: item ? item.Address : null
        },
      {
          name: 'gender',
          type: 'radio',
          label: 'gender',
          placeholder: 'gender',
          value: 'Male'
      },
      {
        name: 'email',
        type: 'text',
        placeholder: 'email address',
        value: item ? item.Email : null
      }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: (item) => {
            console.log('Confirm Ok', item);
            if (index !== undefined) {
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });

    await alert.present();
  }
}
