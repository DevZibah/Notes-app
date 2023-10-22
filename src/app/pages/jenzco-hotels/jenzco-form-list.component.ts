import { Component, OnInit } from '@angular/core';
import { formServices } from './form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IForm } from './form-Interface';

@Component({
  selector: 'app-jenzco-form-list',
  templateUrl: './jenzco-form-list.component.html',
  styleUrls: ['./jenzco-form-list.component.css'],
})
export class JenzcoFormListComponent implements OnInit {
  formUser: any;
  private sub: Subscription;

  formUsers: IForm[] = [];

  constructor(
    private service: formServices,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.viewDataById(id);
    });
  }

  viewDataById(formUserId: number) {
    if (formUserId) {
      this.formUser = this.formUsers.find((x) => x.id === formUserId);
      console.log(this.formUser);

      this.service.getDataById(formUserId).subscribe((response) => {
        this.formUser = response;
        console.log(this.formUser);
      });
    }
  }
}
