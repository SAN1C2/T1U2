import { Component } from '@angular/core';
import { Paquete } from './model/paquete.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'T1U2';


  paquetes: Paquete[] = [{
    img: 'https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2018/06/montana-siete-colores-informacion.jpg',
    tour: 'Montaña de 7 Colores',
    descripcion: 'A unos 100 kilómetros al sureste de Cusco, Perú, existe un arcoíris hecho montaña.',
    precio: 250
  },
  {
    img: 'https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2018/10/palcoyo.jpg',
    tour: 'Cordillera de Palccoyo',
    descripcion: '-----',
    precio: 400
  },
  {
    img: 'https://cdn.getyourguide.com/img/tour/5d187adc926b0.jpeg/146.jpg',
    tour: '4 Ruinas en Cusco',
    descripcion: '------',
    precio: 300
  }
  ]

  t_img: string = '';
  t_tour: string = '';
  t_des: string = '';
  t_pre: number = 0;

  nuevoPaquete() {
    const nuevoPaquete = {
      img: this.t_img,
      tour: this.t_tour,
      descripcion: this.t_des,
      precio: this.t_pre
    };
    this.paquetes.push(nuevoPaquete);
    this.t_img = '';
    this.t_tour = '';
    this.t_des = '';
    this.t_pre = 0;
  }

  eliminarPaquete(posicion: number): void {
    this.paquetes.splice(posicion, 1)
  }
}



