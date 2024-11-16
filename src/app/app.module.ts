import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenubarComponent } from './menubar/menubar.component';
import { EventiComponent } from './eventi/eventi.component';
import { ArtistiComponent } from './artisti/artisti.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    EventiComponent,
    ArtistiComponent,
    ChisiamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
