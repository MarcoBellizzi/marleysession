import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: (event: any) => {
          this.redirect('');
        }
      },
      {
        label: 'Eventi',
        icon: 'pi pi-ticket',
        command: (event: any) => {
          this.redirect('eventi');
        }
      },
      {
        label: 'Artisti',
        icon: 'pi pi-headphones',
        command: (event: any) => {
          this.redirect('artisti');
        }
      },
      {
        label: 'Chi siamo',
        icon: 'pi pi-users',
        command: (event: any) => {
          this.redirect('chisiamo');
        }
      }
    ]

  }

  redirect(target: string): void {
    this.route.navigate([target]);
  }

}
