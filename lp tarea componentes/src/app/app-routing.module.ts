import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CincoComponent } from './components/cinco/cinco.component';
import { CuatroComponent } from './components/cuatro/cuatro.component';
import { DosComponent } from './components/dos/dos.component';
import { HomeComponent } from './components/home/home.component';
import { TresComponent } from './components/tres/tres.component';
import { UnoComponent } from './components/uno/uno.component';


const ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'uno', component: UnoComponent},
  {path: 'dos', component: DosComponent},
  {path: 'tres', component: TresComponent},
  {path: 'cuatro', component: CuatroComponent},
  {path: 'cinco', component: CincoComponent},
  
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
