import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imageUrl: string = '/assets/DSC01891.png';
  @Input() title: string = 'Greenpecs Gateway to Innovation';
  @Input() description: string = 'Loren ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque.';
}
