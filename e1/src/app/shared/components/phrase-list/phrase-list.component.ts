import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import { PhraseService } from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

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
