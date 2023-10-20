import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { formServices } from './form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jenzco-form-list',
  templateUrl: './jenzco-form-list.component.html',
  styleUrls: ['./jenzco-form-list.component.css'],
})
export class JenzcoFormListComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: formServices,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
