import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardReadComponent } from './card-read/card-read.component';
import { CardsComponent } from './cards/cards.component';
import { IndexComponent } from './index/index.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent,
  },
  {
    path: 'a-case', component: CardsComponent,
  },
  {
    path: 'read/:name/:id', component: CardReadComponent,
  },
  {
    path: 'search/:query', component: SearchResultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
