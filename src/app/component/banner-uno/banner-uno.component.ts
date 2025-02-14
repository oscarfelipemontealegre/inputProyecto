import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-uno',
  standalone: true,
  imports: [],
  templateUrl: './banner-uno.component.html',
  styleUrl: './banner-uno.component.css'
})
export class BannerUnoComponent {
    @Input() imageBanner: string = '/assets/DSC01632.png';
    @Input() titleUno: string = '+20';
    @Input() descriptionUno: string = 'Countrys with distributors';
    @Input() titleDos: string = '+100';
    @Input() descriptionDos: string = 'Greenhouses automated';
    @Input() titleTres: string = '+15';
    @Input() descriptionTres: string = 'Years of expertise';
}
