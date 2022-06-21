import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

ent = [
  {
    nome: "Bruschettas",
    preco: "15,00",
    pagina: "/desc",
    foto: "https://s2.glbimg.com/yepMp9sZUqaIq2g0sc_VDCe0he8=/0x0:1600x1067/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/11/15/15_54_41_185_bruschettas2.jpg",
    descricao: "4 fatias de pão italiano, tomates picados Sal e pimenta-do-reino, folhas de manjericão picadas"
},
{
    nome: "Carpaccio",
    preco: "33,00",
    pagina: "/desc",
    foto: "https://img.itdg.com.br/tdg/images/recipes/000/001/579/349264/349264_original.jpg",
    descricao: "o filetinho bem fino de contra file, alcaparas, azeite de oliva, mostarda, queijo parmesão"
},
{
    nome: "Batata frita com queijo e bacon",
    preco: "30,00",
    pagina: "/desc",
    foto: "https://t2.rg.ltmcdn.com/pt/posts/7/4/3/batata_frita_com_queijo_mussarela_e_bacon_6347_orig.jpg",
    descricao: "300g de batata, queijo e bacon"
},
{
    nome: "Polenta frita com queijo ralado",
    preco: "28,00",
    pagina: "/desc",
    foto: "https://i.ytimg.com/vi/iy5u86xPBUE/maxresdefault.jpg",
    descricao: "300g de polenta e queijo ralado"
},
{
    nome: "Salada de folhas",
    preco: "59,00",
    pagina: "/desc",
    foto: "https://s2.glbimg.com/azf8JlOgjfVGySFul9f2m-5ezqI=/0x0:450x334/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/28/28/357/salada_de_folhas_presunto_e_manga_7_2320.jpg",
    descricao: "mix de folhas, queijo gorgonzola, uvas passas brancas, palmito, nozes, tomate sweet grape, champignons, frango defumado, tomate seco e alcaparras"
}
]
navegar () {
    this.navController.navigateRoot('/home');
}
}