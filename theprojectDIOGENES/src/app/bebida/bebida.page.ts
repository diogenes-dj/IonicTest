import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.page.html',
  styleUrls: ['./bebida.page.scss'],
})
export class BebidaPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

bebi = [
  {
    nome: "Coca-Cola 2 litros",
    preco: "10,00",
    pagina: "/desc",
    foto: "https://static.distribuidoracaue.com.br/media/catalog/product/cache/1/thumbnail/600x800/9df78eab33525d08d6e5fb8d27136e95/r/e/refrigerante-coca-cola-2-litros.jpg",
    descricao: "Coca 2 litros gelada!!!"
},
{
    nome: "Guaraná Antárctica 2 litros",
    preco: "9,00",
    pagina: "/desc",
    foto: "https://emporiokaminski.com.br/wp-content/uploads/2020/07/Refrigerante-Guarana%CC%81-Antarctica-2l.jpg",
    descricao: "Guaraná Antarctica 2 litros gelada!!!"
},
{
    nome: "H2O 500ml",
    preco: "6,00",
    pagina: "/desc",
    foto: "https://salvadornorteonline.com.br/salvadornorteonline/2021/02/H2O.jpg",
    descricao: "H2O 500ml"
},
{
    nome: "Suco 300ml",
    preco: "7,00",
    pagina: "/desc",
    foto: "https://img.imageboss.me/experience/cdn/animation:true/wp-content/uploads/2022/02/20220201144535-sucosnaturais-header-fita-scaled.jpg",
    descricao: "1 Copo 300ml. Suco Diversos Sabores"
},
{
    nome: "Vitamina 300ml",
    preco: "8,00",
    pagina: "/desc",
    foto: "https://maternidadecolorida.com.br/wp-content/uploads/2015/01/shutterstock_173190701.jpg",
    descricao: "1 Copo 300ml. Vitamina Diversos Sabores"
}
]
navegar () {
    this.navController.navigateRoot('/home');
}
}