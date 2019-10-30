import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'

import {PhrasePageComponent} from './phrase-page.component'
import {PhraseDetailComponent} from '../shared/components/phrase-detail/phrase-detail.component'

@NgModule({
  imports: [
    // Определение маршрутов для feature-модуля.
    // Метод forRoot должен использоваться только в AppModule.
    RouterModule.forChild([
      { path: 'phrases', component: PhrasePageComponent },
      { path: 'phrase/:id', component: PhraseDetailComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PhraseRoutingModule {}
