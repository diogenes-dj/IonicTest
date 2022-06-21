import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
 })
 export class HomePage {
  constructor() {
  }
  listitens = [
    { pagina: "/dia",
      foto: "https://i.pinimg.com/280x280_RS/a0/78/54/a07854772c7211578d5572fa3ae8b335.jpg",
      nome: "Oferta do Dia!!!"
    },
{ pagina: "/psaida",
  foto: "https://caminhoslanguages.com/wp-content/uploads/2020/04/traditional-brazilian-foods-1.jpg",
  nome: "Refeição Principal" 
},
{ pagina: "/entrada",
  foto: "https://blog.atau.com.br/wp-content/uploads/2019/03/opcoes-de-entrada-restaurante.jpg",
  nome: "Delícias de Entrada" 
},
{ pagina: "/sobremesa",
  foto: "https://www.foodservicenews.com.br/wp-content/uploads/2021/05/capa-1-1.jpg",
  nome: "Sobremesas" 
},
{ pagina: "/lanche",
  foto: "https://pimentinhalanches.com/wp-content/uploads/2020/01/foto-lanche-site-1.jpg",
  nome: "Lanches" 
},
{ pagina: "/bebida",
  foto: "https://casaeconstrucao.org/wp-content/uploads/2021/06/1-fornecedor-de-bebidas-alcoolicas-e-nao-alcoolicas.png",
  nome: "Bebidas"
}
]
}