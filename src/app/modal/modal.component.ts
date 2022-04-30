
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  
  constructor(private modalCtrl: ModalController , public navCtrl: NavController ) { }

  dismissModal() {
    this.modalCtrl.dismiss();
}
    public inputVal:string= "fgrg";
    public inputVal2:string;
  saveModal(){
    this.inputVal = this.inputVal2;
    console.log(this.inputVal);
    };

  }

