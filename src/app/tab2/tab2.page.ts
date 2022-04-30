import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ContactserviceService } from '../contactservice.service';
import { InputDialogService } from '../input-dialog-service.service';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public alertController: AlertController, toastController: ToastController, 
    public dataService: ContactserviceService, public inputDialogService: InputDialogService,
    public modalCtrl: ModalController
  ) {}

  loadItems(){
    return this.dataService.getItems();
  }

async openModal(){
  const modal = await this.modalCtrl.create({
    component: ModalComponent
    });
    await modal.present();
}

shuffle_Questions(array) {
  let currentIndex = array.length,  randomIndex;

 
  while (currentIndex != 0) {

    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array[currentIndex];
}

Happyresponse(){
  Swal.fire({
    title: 'HURRAY!!',
    text: "tst",
    icon: 'success'

  });

}



showAlert() {
  console.log('test');
  this.showAlertPrompt();
}

public array =['Are you an amazing person?' ,'Do you have all the potential and talent in the world?', 
               'Will you achieve all the goals you set out for yourself?' , 'Are you full of love and magnificence?',
                'Nothing can stop you. agree?' , 'are you full of wonder and passion?' , 'will you accomplish all that you desire?' ]



async showAlertPrompt() {
  const alert = await this.alertController.create({
    header: 'Self-Affirmation',
    subHeader: 'Be good to yourself',
    message:  this.shuffle_Questions(this.array) ,
    buttons: [
          {
            text: 'Absolutely' ,
            handler: () => {this.Happyresponse()}
          },
          {
            text: 'Without a Doubt' ,
            handler: () => {this.Happyresponse()}
          }
            ]
  });

  await alert.present();
}
}