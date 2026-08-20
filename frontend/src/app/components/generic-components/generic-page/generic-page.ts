import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-generic-page',
  imports: [],
  host: { class: 'block w-full h-full' },
  templateUrl: './generic-page.html',
})
export default class GenericPage {
  pageTitle = input<string>('');
  pageDescription = input<string>('');
}
