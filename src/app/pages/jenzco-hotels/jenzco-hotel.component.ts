import { Component, OnInit } from '@angular/core';
import { IClient } from './clients';
import { formServices } from './form.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IForm } from './form-Interface';
import { Subscription } from 'rxjs';

function bodySize(min: number, max: number): ValidatorFn {
  // we can add our custom validator function above the component class because the validator will only be used by this component.
  // to allow a formControl or a formgroup, we specify AbstractControl here
  // this is the return validator function
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    // we check if the AbstractControl has a value that is not null, is not a number, is less than 1, or greater than 5
    if (
      c.value !== null &&
      (isNaN(c.value) || c.value < min || c.value > max)
    ) {
      // if so, we return the key and value pair specifying the name of the validation rule, we'll call it range and true to indicate that the validation rule was broken. the validation rule name is then added to the errors collection for the passed passed in FormControl
      return { range: true };
    }
    // if the control is valid, we return null, meaning no error message
    return null;
  };
}

@Component({
  selector: 'app-jenzco-hotel',
  templateUrl: './jenzco-hotel.component.html',
  styleUrls: ['./jenzco-hotel.component.css'],
})
export class JenzcoHotelComponent implements OnInit {
  hotelTitle: string = 'Jenzco Hotel and Suites';
  textColor: string = 'blue';
  starWidth: number = 17;

  customerForm!: FormGroup;
  errorMessage = '';
  // customer = new IForm();

  formUsers: IForm[] = [];
  edit = true;
  add = false;

  private sub: Subscription;

  clients: IClient[] = [
    {
      clientId: 1,
      clientName: 'Luciano',
      clientRoomCode: '11191',
      ArrivalDate: 'Aug 19, 2021',
      price: 56092.88,
      starRating: 3.2,
    },
    {
      clientId: 2,
      clientName: 'Jummy',
      clientRoomCode: '89023',
      ArrivalDate: 'July 18, 2021',
      price: 56309.88,
      starRating: 4.2,
    },
    {
      clientId: 3,
      clientName: 'Chisom',
      clientRoomCode: '11048',
      ArrivalDate: 'April 02, 2021',
      price: 15609.88,
      starRating: 4.8,
    },
    {
      clientId: 4,
      clientName: 'Benedict',
      clientRoomCode: '40022',
      ArrivalDate: 'April 10, 2022',
      price: 11000.55,
      starRating: 3.7,
    },
    {
      clientId: 5,
      clientName: 'Khaid',
      clientRoomCode: '65042',
      ArrivalDate: 'October 15, 2020',
      price: 30985.95,
      starRating: 4.6,
    },
  ];

  showClientName(clientName: string): void {
    alert('This is ' + clientName);
  }

  constructor(
    private fb: FormBuilder,
    private service: formServices,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.clients);

    this.customerForm = this.fb.group({
      id: null,
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      bodySize: [null, bodySize(8, 18)],
      description: ['', [Validators.required, Validators.maxLength(256)]],
    });

    // Getting the formUsers
    this.getData();

    // this.sub = this.route.paramMap.subscribe((params) => {
    //   const id = +params.get('id')!;
    //   this.getDataById(id);
    // });
  }

  private getData() {
    this.service.getData().subscribe({
      next: (data) => {
        this.formUsers = data;
        console.log(this.formUsers);
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  resetValues() {
    this.customerForm.reset();
  }

  update(formUserId: number) {
    if (formUserId) {
      const formUser = this.formUsers.find((x) => x.id === formUserId);
      console.log(formUser);

      if (!formUser) return;
      this.customerForm.setValue({
        id: formUser.id,
        firstName: formUser.firstName,
        lastName: formUser.lastName,
        bodySize: formUser.bodySize,
        description: formUser.description,
      });
    } else {
      alert('Error updating item');
    }
  }

  save(): void {
    if (this.customerForm.valid) {
      if (this.customerForm.dirty) {
        if (this.customerForm.value.id === null) {
          this.service
            .createItem(this.customerForm.value)
            .subscribe((response) => {
              console.log(response);
              this.getData();
              this.resetValues();
            });
        } else {
          this.service
            .updateItem(this.customerForm.value)
            .subscribe((response) => {
              console.log(response);
              this.getData();
              this.resetValues();
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    this.customerForm.reset();
    this.router.navigate(['/pages/jenzco-hotels']);
  }

  deleteItem(formUserId: number): void {
    this.service.deleteItemById(formUserId).subscribe((response) => {
      console.log(response);
      this.getData();
      this.resetValues();
    });
  }

  getDataById(formUserId: number) {
    if (formUserId) {
      const formUser = this.formUsers.find((x) => x.id === formUserId);
      console.log(formUser);

      this.service.getDataById(formUserId).subscribe((response) => {
        console.log(response);
        this.getData();
        this.resetValues();
      });
    }
    this.router.navigate([
      '/pages/jenzco-hotels',
      formUserId,
      'jenzco-form-list',
    ]);
  }
}
