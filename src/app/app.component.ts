import { Component } from '@angular/core';
import { RendererService } from '../services/RendererService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ RendererService ]

})
export class AppComponent {
  title = 'email-builder';
}
