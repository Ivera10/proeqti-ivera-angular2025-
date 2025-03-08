import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HomePageComponent } from './component/home-page/home-page.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,ContentComponent,FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proeqti-ivera';
}
