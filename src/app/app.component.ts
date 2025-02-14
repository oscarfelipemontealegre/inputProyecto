import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./component/header/header.component";
import { CardComponent } from "./component/card/card.component";
import { SectionOneComponent } from "./component/section-one/section-one.component";
import { BannerUnoComponent } from './component/banner-uno/banner-uno.component';
import { PublicidadComponent } from './component/publicidad/publicidad.component';
import { FooterComponent } from "./component/footer/footer.component";
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HttpClientModule,
    CommonModule,
    HeaderComponent,
    CardComponent,
    SectionOneComponent,
    BannerUnoComponent,
    PublicidadComponent,
    FooterComponent,
  
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  // ✅ Función para verificar si la ruta es '/input'
  isInputRoute(): boolean {
    return this.router.url === '/input';
  }
}
