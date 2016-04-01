import {Injectable} from'angular2/core';
import {Person} from '../model/person.model';

@Injectable()
export class NamesService {

    constructor() {
    }

    names: Person[] = [
        new Person('Peter', 'de Boer'),
        new Person('Lars', 'de Boer'),
        new Person('Don', 'de Boer'),
        new Person('Giel', 'de Boer')
    ];

    getNames() {
        return this.names;
    }
}