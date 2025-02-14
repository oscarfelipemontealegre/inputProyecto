import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() imageUrl: string = '/assets/Greenhouse.jpg';
  @Input() altText: string = 'Greenhouse';
  @Input() titleUno: string = 'Transforming Horticulture';
}