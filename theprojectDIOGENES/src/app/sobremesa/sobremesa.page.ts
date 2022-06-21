import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sobremesa',
  templateUrl: './sobremesa.page.html',
  styleUrls: ['./sobremesa.page.scss'],
})
export class SobremesaPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }
  sobre = [
    {
      nome: "Pudim de leite Condensado",
      preco: "7,00",
      pagina: "/desc",
      foto: "https://s2.glbimg.com/115DQucrWsNOUxf_ncmMUisprZI=/0x0:1080x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/w/a/cB6VP5QoOByFKEuCleIQ/jonreceitas-109758346-416338779271002-5424220606850697813-n.jpg",
      descricao: "Um grande pedaço de pudim"
  },
  {
      nome: "Cuscuz de tapioca",
      preco: "8,00",
      pagina: "/desc",
      foto: "https://img.cybercook.com.br/receitas/202/cuscuz-de-tapioca.jpeg",
      descricao: "Um grande pedaço de cuscuz"
  },
  {
      nome: "Manjar de Côco",
      preco: "9,00",
      pagina: "/desc",
      foto: "https://www.receitas-sem-fronteiras.com/media/ogaaalanqfyt9vffqbymsg4m4gokjt8shq8uqdgpy3qxlias64s8tsop-bknm7k4caaffdzhm3m6yu4epkqfmztuximam1t1upky3joyftrdpackhvue7yb1bngf-2_crop.jpg/rh/manjar-de-coco.jpg",
      descricao: "Um grande pedaço de cuscuz de Manjar de Côco"
  },
  {
      nome: "Mousse de Maracujá",
      preco: "8,00",
      pagina: "/desc",
      foto: "https://dinorma.com.br/wp-content/uploads/2020/01/Mousse-De-Maracuj%C3%A1.png",
      descricao: "Um grande pedaço de Mousse de Maracujá"
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