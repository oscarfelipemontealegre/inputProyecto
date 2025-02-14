import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publicidad',
  standalone: true,
  imports: [],
  templateUrl: './publicidad.component.html',
  styleUrl: './publicidad.component.css'
})
export class PublicidadComponent {
  @Input() Publicenter: string = '/assets/Partner_brands.png';
}
