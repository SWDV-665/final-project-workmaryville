import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ContactserviceService } from '../contactservice.service';
import { InputDialogService } from '../input-dialog-service.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = 'Contacts';
  items = [  ];

  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: ContactserviceService, public inputDialogService: InputDialogService,
    public modalCtrl: ModalController) {
  }

  loadItems(){
    return this.dataService.getItems();
  }

  async removeItem(item, index){
    console.log("Removing Contact- ", item, index)
    const toast = await this.toastController.create({
      message: 'Removing ' + item.name + ' from contacts list...',
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async editItem(item, index){
    console.log("Edit Contact- ", item, index)
    const toast = await this.toastController.create({
      message: 'Editing ' + item.name + ' from contacts list...',
      duration: 2000
    });
    toast.present();
    this.inputDialogService.presentPrompt(item, index);
  }

  addItem(){
    console.log("Add Contact.");
    this.inputDialogService.presentPrompt();
  }
}