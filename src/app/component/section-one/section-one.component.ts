import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})
export class SectionOneComponent {
    @Input() imageUrl: string = '/assets/persona2.png';
    @Input() titlegra: string = 'Greenspec Smart Greenhouse Management: Efficient, Sustainable, and Automated';
    @Input() descriptiongra: string = 'Optimize growing conditions while reducing environmental impact. Our management system solutions help growers reduce water and energy usage, enhance resource efficiency, and promote sustainable agriculture With automated greenhouse management, you can cultivate healthier crops while preserving natural resources.';
}
