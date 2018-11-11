import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  show: boolean = false;
  tab_show = true;
  type_of_leave
  constructor(public navCtrl: NavController) {
    console.log(this.tab_show);

  }

}
