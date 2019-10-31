import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'

import {Phrase} from '../../interfaces/phrase'
import {PhraseService} from '../../services/phrase.service'

@Component({
  selector: 'app-phrase-detail',
  templateUrl: './phrase-detail.component.html',
  styleUrls: ['./phrase-detail.component.scss']
})
export class PhraseDetailComponent implements OnInit {

  phrase: Phrase

  // ActivatedRoute - содержит информацию о маршруте,
  // связанную с компонентом, который загружен в outlet
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: PhraseService
  ) { }

  ngOnInit() {
    // params - параметры текущего маршрута. Данное свойство
    // является Observable объектом. Если параметры будут
    // изменены - произойдёт событие, и компонент узнает
    // об изменениях.
    // OBSERVABLE PARAMS
    // forEach - устанавливаем обработчик на каждое изменение
    // params
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'] // Приводим значение параметра id
      this.service           // к типу number.
        .getPhrase(id) // Обращаемся к сервису и запрашиваем
          // фразу по id. Получаем Promise.
        .then(result => this.phrase = result) // Как только
          // Promise перейдёт в состояние resolved присваиваем
          // его значение свойству phrase.
    })
    // SNAPSHOT
    // Получение начального значения параметра id.
    /* let id = +this.activatedRoute.snapshot.params['id']
    this.service
      .getPhrase(id)
      .then(result => this.phrase = result) */
  }

  goToPhraseList() {
    this.router.navigate(['phrase']) // Перенаправляет
      // пользователя на PhraseListComponent.
  }

}
