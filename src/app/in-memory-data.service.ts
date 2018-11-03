import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Electronic } from './electronic';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const electronics = [
      { id: 11, name: 'Mobile' },
      { id: 12, name: 'Laptop' },
      { id: 13, name: 'TV' },
      { id: 14, name: 'Tab' },
      { id: 15, name: 'Refrigerator' }
    ];
    return {electronics};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(electronics: Electronic[]): number {
    return electronics.length > 0 ? Math.max(...electronics.map(electronic => electronic.id)) + 1 : 11;
  }
}