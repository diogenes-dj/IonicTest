import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-dia',
  templateUrl: './dia.page.html',
  styleUrls: ['./dia.page.scss'],
})
export class DiaPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

promo = [

{
  nome: "Yakisoba",
  preco: "25,00",
  pagina: "/desc",
  foto: "https://img.cybercook.com.br/receitas/416/como-fazer-yakisoba-1-840x480.jpeg?q=75",
  descricao: "Macarrão, carne, frango e legumes"
},
{
  nome: "Bruschettas",
    preco: "15,00",
    pagina: "/desc",
    foto: "https://s2.glbimg.com/yepMp9sZUqaIq2g0sc_VDCe0he8=/0x0:1600x1067/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/11/15/15_54_41_185_bruschettas2.jpg",
    descricao: "4 fatias de pão italiano, tomates picados Sal e pimenta-do-reino, folhas de manjericão picadas"
},
{
  nome: "Nutella com Morango",
  preco: "10,00",
  pagina: "/desc",
  foto: "https://www.montaencanta.com.br/wp-content/uploads/2014/09/morango-com-nutella-7.jpg",
  descricao: "Muita Nutella com Morango"
}
]
navegar () {
    this.navController.navigateRoot('/home');
}
}