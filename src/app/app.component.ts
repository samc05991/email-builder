import { Component } from '@angular/core';
import { StylerService } from 'src/services/StylerService';
import { RendererService } from '../services/RendererService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ RendererService, StylerService ]

})
export class AppComponent {
  title = 'email-builder';
}
