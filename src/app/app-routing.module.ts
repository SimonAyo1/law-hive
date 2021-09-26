import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardReadComponent } from './card-read/card-read.component';
import { CardsComponent } from './cards/cards.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
  },
  {
    path: 'a-case', component: CardsComponent,
  },
  {
    path: 'read/:name', component: CardReadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
