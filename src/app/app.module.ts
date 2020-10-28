import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RendererComponent } from './renderer/renderer.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { FooterComponent } from './footer/footer.component';
import { StylerComponent } from './styler/styler.component';
import { ComponentBuilderComponent } from './component-builder/component-builder.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentComponent } from './component/component.component';

// rendered components
import { HeaderComponentComponent } from './renderer-components/header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    RendererComponent,
    ColorPaletteComponent,
    FooterComponent,
    StylerComponent,
    ComponentBuilderComponent,
    ComponentListComponent,
    ComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
