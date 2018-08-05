import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public usuario:string = "JFernando";
  public datanascimento:string = "10 de Fevereiro de 1973";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public teste(){
    alert("Criando a primeira função");
  }

  public soma(n1:number, n2:number){
    alert(n1 + n2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.soma(10,14);
  }

}
