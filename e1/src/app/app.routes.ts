import {Routes} from '@angular/router'
import {HomePageComponent} from './home-page/home-page.component'
import {PhrasePageComponent} from './phrase-page/phrase-page.component'
import {PhraseDetailComponent} from './shared/components/phrase-detail/phrase-detail.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'phrases',
    component: PhrasePageComponent
  },
  {
    path: 'phrase/:id',
    component: PhraseDetailComponent
  }
]
