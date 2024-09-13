import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AComponent },
  { path: 'about', component: BComponent },
  { path: 'contact', component: CComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
