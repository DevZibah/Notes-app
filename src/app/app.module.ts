import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  HttpClientInMemoryWebApiModule,
  InMemoryWebApiModule,
} from 'angular-in-memory-web-api';
import { BackData } from './BackData';
import { formBackData } from './pages/jenzco-hotels/formBackData';

import { FormsModule } from '@angular/forms';
import { JenzcoFormListComponent } from './pages/jenzco-hotels/jenzco-form-list.component';

@NgModule({
  declarations: [AppComponent, JenzcoFormListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackData),
    HttpClientInMemoryWebApiModule.forRoot(formBackData),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
