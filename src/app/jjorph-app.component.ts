import { Component, Inject} from '@angular/core';
import {JQ_TOKEN} from './common/index';
import { $ } from 'protractor';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'jjorph-app',
  templateUrl: './jjorph-app.component.html'
})
export class JjorphAppComponent {
  imgLink: string;
  title = 'jjorph';
  constructor(@Inject(JQ_TOKEN) private $: any){}

  popGallery(img) {
    this.imgLink = img;
    this.$('#simple-modal').modal();
    //console.log(this.imgLink);
  }
}
