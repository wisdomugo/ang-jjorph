import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JjorphAppComponent } from './jjorph-app.component';
import { JQ_TOKEN, SimpleModalComponent } from './common/index';

let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    JjorphAppComponent,
    SimpleModalComponent
  ],
  providers: [
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [JjorphAppComponent]
})
export class AppModule { }
