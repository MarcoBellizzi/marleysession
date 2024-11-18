import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";

@Component({
  selector: 'app-artisti',
  standalone: true,
  imports: [MenubarComponent],
  templateUrl: './artisti.component.html',
  styleUrl: './artisti.component.css'
})
export class ArtistiComponent {

}
