import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventiComponent } from './eventi/eventi.component';
import { ArtistiComponent } from './artisti/artisti.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'eventi', component: EventiComponent },
  { path:'artisti', component: ArtistiComponent },
  { path:'chisiamo', component: ChisiamoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
