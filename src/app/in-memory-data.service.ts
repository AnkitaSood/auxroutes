import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 12, name: 'Dr. Nice', powers: 'super nice'},
            {id: 13, name: 'Bombasto', powers: ' so cool, loud'},
            {id: 14, name: 'Celeritas', powers: ' Master of Speed'},
            {id: 15, name: 'Magneta', powers: 'generate and control magnetic fields'},
            {id: 16, name: 'RubberMan', powers: 'rubber, man'},
            {id: 17, name: 'Dynamo', powers: 'electric power'},
            {id: 18, name: 'Dr. IQ', powers: 'high IQ'},
            {id: 19, name: 'Magma', powers: 'manipulate molten rock'},
            {id: 20, name: 'Tornado', powers: 'speed'}
        ];
        return {heroes};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
