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
import { HomeComponent } from './home/home.component';

// rendered components
import { HeaderComponentComponent } from './renderer-components/header-component/header-component.component';
import { CardComponentComponent } from './renderer-components/card-component/card-component.component';
import { SectionComponentComponent } from './renderer-components/section-component/section-component.component';
import { ImageComponentComponent } from './renderer-components/image-component/image-component.component';
import { TextComponentComponent } from './renderer-components/text-component/text-component.component';
import { SelectedElementComponent } from './selected-element/selected-element.component';
import { EmailStructureComponent } from './email-structure/email-structure.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DeveloperPortalComponent } from './developer-portal/developer-portal.component';

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
    HeaderComponentComponent,
    CardComponentComponent,
    SectionComponentComponent,
    ImageComponentComponent,
    TextComponentComponent,
    SelectedElementComponent,
    EmailStructureComponent,
    HomeComponent,
    BreadcrumbsComponent,
    LoginComponent,
    SignUpComponent,
    DeveloperPortalComponent
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
