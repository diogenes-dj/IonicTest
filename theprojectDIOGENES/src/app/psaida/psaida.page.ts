import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-psaida',
  templateUrl: './psaida.page.html',
  styleUrls: ['./psaida.page.scss'],
})
export class PsaidaPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

saida = [
  {
    nome: "Galinhada",
    preco: "29,00",
    pagina: "/desc",
    foto: "https://cdn.minhareceita.com.br/2022/02/galinhada-facil.jpg",
    descricao: "700 g de frango picado, arroz, azeite, pimentão, cebola, tomate, cenoura, milho, coentro"
},
{
    nome: "Lasanha de presunto e muçarela",
    preco: "19,00",
    pagina: "/desc",
    foto: "https://www.aquinacozinha.com/wp-content/uploads/2012/05/Lasanha-Pr%C3%A1tica-3.jpg",
    descricao: "queijo, presunto e tomate especial"
},
{
    nome: "Yakisoba",
    preco: "25,00",
    pagina: "/desc",
    foto: "https://img.cybercook.com.br/receitas/416/como-fazer-yakisoba-1-840x480.jpeg?q=75",
    descricao: "Macarrão, carne, frango e legumes"
},
{
    nome: "Fricassê de frango",
    preco: "38,00",
    pagina: "/desc",
    foto: "https://akdelicatessen.com.br/wp-content/uploads/2021/12/receita-fricasse-de-frango.jpg",
    descricao: "400 gramas de peito de frango cozido e desfiado, 200 g de muçarela fatiada, cebola picada"
},
{
    nome: "Muqueca capixaba",
    preco: "99,00",
    pagina: "/desc",
    foto: "https://www.emdiaes.com.br/Images/Noticias/Vai-uma-moqueca-capixaba-Saiba-como-preparar-e-conhe%C3%A7a-sua-hist%C3%B3ria.jpg",
    descricao: "muqueca de peixe e mariscos, arroz e pirão"
}
]
navegar () {
    this.navController.navigateRoot('/home');
}
}