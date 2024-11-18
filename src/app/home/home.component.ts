import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { MenubarComponent } from "../menubar/menubar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenubarComponent,
    ButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    private route: Router
  ) { }

  redirect(path: string) {
    this.route.navigate([path]);
  }

}
