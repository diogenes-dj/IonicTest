import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-desc',
  templateUrl: './desc.page.html',
  styleUrls: ['./desc.page.scss'],
})
export class DescPage implements OnInit {
  titulo: string;
  preco: string;
  imagem: string;
  descricao: string;
  constructor(private roteador: ActivatedRoute) { }

  ngOnInit() { 
    this.roteador.queryParams.subscribe(parametro => {
      this.imagem = parametro.imagem;
      this.preco = parametro.preco2;
      this.descricao = parametro.descricao;
      this.titulo = parametro.nome;
    })
   }
   navegar () {
    history.back();
}

}