import {Component, OnInit} from '@angular/core';

//noinspection TypeScriptUnresolvedFunction
const $script = require('scriptjs');

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
})
export class CkeditorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $script("https://cdn.ckeditor.com/4.5.11/standard/ckeditor.js", (_)=> {
      const CKEDITOR = window['CKEDITOR'];

      CKEDITOR.replace('ckeditor-showcase');
    });
  }

}
