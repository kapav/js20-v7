import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import {Phrase} from '../shared/interfaces/phrase'
import { PhraseService } from '../shared/services/phrase.service'

@Component({
  selector: 'app-phrase-page',
  templateUrl: './phrase-page.component.html',
  styleUrls: ['./phrase-page.component.scss']
})
export class PhrasePageComponent implements OnInit {

  selectedId: number
  phrases: Phrase[]
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute, // Добавлен
    private phraseService: PhraseService
  ) {}

  // Обработчик событий изменения параметров адресной строки.
  ngOnInit() { // Params добавлен в import.
    this.activatedRoute.params.forEach((params: Params) => {
      this.selectedId = +params['id']
      this.phraseService // обращаемся к сервису
        .getAll() // получаем Promise
        .then(result => this.phrases = result) // как только
          // Promise перейдёт в состояние resolved результат
          // его работы присваиваем свойству phrases
    })
  }

  // Для выделения выбранного элемента данный метод принимает
  // фразу и возвращает булевое значение.
  isSelected(phrase: Phrase) {
    return phrase.id === this.selectedId
  }

  onSelect(selected: Phrase) {
    // При клике по элементу списка перенаправляем
    // пользователя по адресу /phrases/id
    // Адрес с обязательным параметром указан в настройках
    // маршрутизации в файле app.routes.ts
    this.router.navigate(['phrase', selected.id])
  }

}
