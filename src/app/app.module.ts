import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JjorphAppComponent } from './jjorph-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    JjorphAppComponent
  ],
  providers: [],
  bootstrap: [JjorphAppComponent]
})
export class AppModule { }
