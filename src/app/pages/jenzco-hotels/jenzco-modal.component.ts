import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-jenzco-modal',
  templateUrl: './jenzco-modal.component.html',
})
export class JenzcoModalComponent {
  constructor(public modalRef: MdbModalRef<JenzcoModalComponent>) {}
}
