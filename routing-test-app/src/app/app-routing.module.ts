import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';
import { AnimalsComponentComponent } from './animals-component/animals-component.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponentComponent},
  { path: 'fruits', component: FruitsComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
