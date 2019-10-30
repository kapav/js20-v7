import { Injectable } from '@angular/core';

import {Phrase} from '../interfaces/phrase'

let phrases = [
  new Phrase(1, 'Hello World', 'English'),
  new Phrase(2, 'Здравствуй, Вселенная', 'Russian'),
  new Phrase(3, 'Bonjour le monde', 'French'),
  new Phrase(4, 'Hallo Welt', 'German')
]

// Promise, который стразу переходит в состояние resolved
// с данными из массива phrases
let phrasesPromise = Promise.resolve(phrases)

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
