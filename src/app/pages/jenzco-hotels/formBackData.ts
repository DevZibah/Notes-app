// import InMemoryDbService so that I can implement my class on InMemoryDbService, also to access the createDb method.
import { InMemoryDbService } from 'angular-in-memory-web-api';
// I use this interface as a bodySize for strong typing data
import { IForm } from './form-Interface';

export class formBackData implements InMemoryDbService {
  // id is a required field in InMemoryDbService. It gets data by id.
  // All changes to this data is retained in memory.
  createDb(): { data: IForm[] } {
    //first collection of data
    let data: IForm[] = [
      {
        id: 1,
        firstName: 'Emma',
        lastName: 'Lukemon',
        bodySize: 10,
        description: 'this is the unit of measuring weight',
      },
      {
        id: 2,
        firstName: 'Cyndy',
        lastName: 'Eli',
        bodySize: 14,
        description: 'this is of the alien species',
      },
      {
        id: 3,
        firstName: 'hilda',
        lastName: 'tules',
        bodySize: 18,
        description: 'this amount is probably enough',
      },
      {
        id: 4,
        firstName: 'Vera',
        lastName: 'Empenada',
        bodySize: 12,
        description: 'this is a spanish song by Shiro Sagisu',
      },
    ];

    return { data };
  }
}
