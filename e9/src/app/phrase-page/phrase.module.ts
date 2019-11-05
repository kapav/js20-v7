import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

import {PhraseRoutingModule} from './phrase-routing.module'

import {PhraseDetailResolve} from '../shared/services/phrase-detail-resolve.guard'

import {PhraseListComponent} from './../shared/components/phrase-list/phrase-list.component'
import {PhraseDetailComponent} from '../shared/components/phrase-detail/phrase-detail.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PhraseRoutingModule // Настройки маршрутизации для модуля
      // PhraseModule.
  ],
  declarations: [
    PhraseListComponent,
    PhraseDetailComponent
  ],
  providers: [PhraseDetailResolve]
})
export class PhraseModule {}
