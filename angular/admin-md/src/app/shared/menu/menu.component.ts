import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menu = [
    {
      name: 'Medios',
      items: [
        {
          label: 'Peliculas',
          path: './pelicula',
          icon: 'movie'
        },
        {
          label: 'Series',
          path: './serie',
          icon: 'movie_filter'
        }
      ]
    },
    {
      name: 'Archivos',
      items: [
        {
          label: 'Listado',
          path: './fuente',
          icon: 'local_shipping'
        },
        {
          label: 'Actualizar',
          path: './fuente/actualizar',
          icon: 'portrait'
        }
      ]
    },
    {
      name: 'Configuracion',
      items: [
        {
          label: 'Rango horarios',
          path: './pedido',
          icon: 'timer'
        },
        {
          label: 'Usuarios',
          path: './usuario',
          icon: 'person'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
