import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public form;
  public quantity = [];
  constructor(private formBuilder: FormBuilder){

  }

  onInit() {
    this.form = this.getForm();
    this.quantity = [
      {value: 'u', label: 'Unidade'},
      {value: 'pct', label: 'Pacote'},
      {value: 'l', label: 'Litros'},
      {value: 'ml', label: 'Mililitros'},
      {value: 'kg', label: 'Kilogramas'},
      {value: 'g', label: 'Gramas'}
    ];
  }

  /**
   * FOrmulario Reativo*/
  getForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

}
