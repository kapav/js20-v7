import { Injectable } from '@angular/core';

import {Phrase} from '../interfaces/phrase'

const phrases = [
  new Phrase(1, 'Hello World', 'Английский'),
  new Phrase(2, 'Здравствуй, Вселенная', 'Русский'),
  new Phrase(3, 'Bonjour le monde', 'Французский'),
  new Phrase(4, 'Hallo Welt', 'Немецкий')
]

// Promise, который стразу переходит в состояние resolved
// с данными из массива phrases
const phrasesPromise = Promise.resolve(phrases)

// Сервис для работы с данными.
// В будущем его можно переделать на работу с сервером.
@Injectable()
export class PhraseService {

  constructor() { }

  // Метод для получения всех фраз.
  // Возвращает Promise с массивом Phrase.
  getAll(): Promise<Phrase[]> {
    return phrasesPromise
  }

  // Метод для получения фразы по id.
  // Возвращает Promise с экземпляром Phrase.
  getPhrase(id: number): Promise<Phrase> {
    return phrasesPromise
      .then(phrases => phrases.find(x => x.id === id))
  }

}
