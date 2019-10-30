import {Component, OnInit} from '@angular/core'

import {Phrase} from '../shared/interfaces/phrase'
import { Router } from '@angular/router'
import { PhraseService } from '../shared/services/phrase.service'

@Component({
  selector: 'app-phrase-page',
  templateUrl: './phrase-page.component.html',
  styleUrls: ['./phrase-page.component.scss']
})
export class PhrasePageComponent implements OnInit {

  phrases: Phrase[]

  constructor(
    private router: Router,
    private phraseService: PhraseService
  ) {}

  ngOnInit() {
    this.phraseService // обращаемся к сервису
      .getAll() // получаем Promise
      .then(result => this.phrases = result) // как только
        // Promise перейдёт в состояние resolved результат
        // его работы присваиваем свойству phrases
  }

  onSelect(selected: Phrase) {
    // При клике по элементу списка перенаправляем
    // пользователя по адресу /phrases/id
    // Адрес с обязательным параметром указан в настройках
    // маршрутизации в файле app.routes.ts
    this.router.navigate(['phrase', selected.id])
  }

}
