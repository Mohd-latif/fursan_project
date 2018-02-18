import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';
import { HeaderComponent } from './ui-components/header/header.component';
import { ServicesComponent } from './ui-components/services/services.component';
import { GuidesComponent } from './ui-components/guides/guides.component';
import { GalleryComponent } from './ui-components/gallery/gallery.component';
import { ContactComponent } from './ui-components/contact/contact.component';
import { FooterComponent } from './ui-components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    NavbarComponent,
    HeaderComponent,
    ServicesComponent,
    GuidesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
