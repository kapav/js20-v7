import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import { PhraseService } from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-list',
  templateUrl: './phrase-list.component.html',
  styleUrls: ['./phrase-list.component.scss']
})
export class PhraseListComponent implements OnInit {

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
    // Перенаправление пользователя, используя относительный
    // путь.
    this.router.navigate([selected.id], {
      relativeTo: this.activatedRoute
    })
  }

}
