import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public form;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.form = this.getForm();
  }

  /**
   * FOrmulario Reativo*/
  getForm(){

  }

}
