import { Component, OnInit } from '@angular/core';

export interface Fruta {
  titulo: string;
  image?: string;
  subtitulo: string;
  peso: number;
  precio: number;
}

export interface Verdura {
  titulo: string;
  image?: string;
  subtitulo: string;
  peso: number;
  precio: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  public titulo = 'Verduleria S.A.V.A';
  public frutas: Fruta[] = [];
  public verduras: Verdura[] = [];

  ngOnInit(): void {
    this.frutas = [
      {
        titulo: 'Banana',
        subtitulo: '$500 x Kg',
        image: "../assets/Frutas/Banana.png",
        peso: 0,
        precio: 500
      },
      {
        titulo: 'Durazno',
        subtitulo: '$350 x Kg',
        image: "../assets/Frutas/Durazno.png",
        peso: 0,
        precio: 350
      },
      {
        titulo: 'Manzana',
        subtitulo: '$600 x Kg',
        image: "../assets/Frutas/Manzana.png",
        peso: 0,
        precio: 600
      },
      {
        titulo: 'Naranja',
        subtitulo: '$400 x Kg',
        image: "../assets/Frutas/Naranja.png",
        peso: 0,
        precio: 400
      },
      {
        titulo: 'Pera',
        subtitulo: '$450 x Kg',
        image: "../assets/Frutas/Pera.png",
        peso: 0,
        precio: 450
      },
    ];

    this.verduras = [
      {
        titulo: 'Lechuga',
        subtitulo: '$500 x Kg',
        image: "../assets/verduras/Lechuga.png",
        peso: 0,
        precio: 500
      },
      {
        titulo: 'Papa',
        subtitulo: '$250 x Kg',
        image: "../assets/verduras/Papa.png",
        peso: 0,
        precio: 250
      },
      {
        titulo: 'Puerro',
        subtitulo: '$400 x Atado',
        image: "../assets/verduras/Puerro.png",
        peso: 0,
        precio: 400
      },
      {
        titulo: 'Tomate',
        subtitulo: '$600 x Kg',
        image: "../assets/verduras/Tomate.png",
        peso: 0,
        precio: 600
      },
      {
        titulo: 'Zanahoria',
        subtitulo: '$250 x Kg',
        image: "../assets/verduras/Zanahoria.png",
        peso: 0,
        precio: 250
      },
    ];
  }
}