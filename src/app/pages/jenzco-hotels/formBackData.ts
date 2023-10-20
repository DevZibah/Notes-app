// import InMemoryDbService so that I can implement my class on InMemoryDbService, also to access the createDb method.
import { InMemoryDbService } from 'angular-in-memory-web-api';
// I use this interface as a bodyMass for strong typing data
import { IForm } from './form-Interface';

export class formBackData implements InMemoryDbService {
  // id is a required field in InMemoryDbService. It gets data by id.
  // All changes to this data is retained in memory.
  createDb(): { data: IForm[] } {
    //first collection of data
    let data: IForm[] = [
      {
        id: 1,
        firstName: '2779',
        lastName: 'Dollars',
        bodyMass: 2779,
        description: 'this is the unit of measuring weight',
      },
      {
        id: 2,
        firstName: '8390',
        lastName: 'Chioma',
        bodyMass: 8390,
        description: 'this is of the alien species',
      },
      {
        id: 3,
        firstName: '4256',
        lastName: 'Pounds',
        bodyMass: 4256,
        description: 'this amount is probably enough',
      },
      {
        id: 4,
        firstName: '2543',
        lastName: 'Clava la Espada',
        bodyMass: 2543,
        description: 'this is a spanish song by Shiro Sagisu',
      },
    ];

    return { data };
  }
}
