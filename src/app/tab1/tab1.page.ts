import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  private primary: string
  public slideOpts = {
    effect: 'flip'
  };
  constructor() {
    this.primary = 'primary';
  }
}
