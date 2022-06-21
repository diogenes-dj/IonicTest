import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-lanche',
  templateUrl: './lanche.page.html',
  styleUrls: ['./lanche.page.scss'],
})
export class LanchePage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

lanch = [
  {
    nome: "X tudo",
    preco: "10,00",
    pagina: "/desc",
    foto: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-x-tudo.jpg",
    descricao: "2 pães, bife de hamburger tradicional, queijo, ovo, presunto, bacon, alface, tomate e batata palha"
},
{
    nome: "Big Caseiro",
    preco: "15,00",
    pagina: "/desc",
    foto: "https://i.ytimg.com/vi/ncYq59d1kgY/maxresdefault.jpg",
    descricao: "2 pães, bife carne caseira 140g, queijo, ovo, presunto, bacon, alface, tomate e batata palha"
},
{
    nome: "Misto quente",
    preco: "7,00",
    pagina: "/desc",
    foto: "https://dd7gu835n6agp.cloudfront.net/wp-content/uploads/2021/11/misto-quente-de-crepioca-1280x720.jpg",
    descricao: "3 pães, queijo e presunto"
},
{
    nome: "Pastel de vento",
    preco: "6,00",
    pagina: "/desc",
    foto: "https://guiadopastel.com.br/wp-content/uploads/2020/04/4-receitas-de-massa-de-pastel-dourado-1200x675.jpg",
    descricao: "Pastel frito, diversos sabores"
},
{
    nome: "Cahorro quente",
    preco: "7,00",
    pagina: "/desc",
    foto: "https://meucachorroquente.com.br/wp-content/uploads/2021/03/como-conservar-pao-de-cachorro-quente-1200x900.jpg",
    descricao: "Pão. salsicha, mostarda e molho"
}
]
navegar () {
    this.navController.navigateRoot('/home');
}
}