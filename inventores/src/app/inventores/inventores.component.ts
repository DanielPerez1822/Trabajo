import { Component, OnInit } from '@angular/core';
import { Inventor } from './inventor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventores.component.html',
  styleUrl: './inventores.component.css'
})
export class InventoresComponent implements OnInit{
  tareas: Inventor[]=[
    {nombre:'Nikola Tesla', invenci\u00f3n:'Corriente Alterna', a\u00f1o:1887, nacionalidad:'Serbia',patentes:300},
    {nombre:'Thomas Edison', invenci\u00f3n:'Bombilla', a\u00f1o:1879, nacionalidad:'Estadounidense',patentes:1093},
    {nombre:'Marie Curie', invenci\u00f3n:'Radioactividad', a\u00f1o:1898, nacionalidad:'Polaca',patentes:5}
  ]
  ngOnInit(): void {

  }

}