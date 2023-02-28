import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {
  @Input() selectedId = "";
  @Input() actionButtonLabel: string = "Create";
  @Output() action = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      name: [''],
      size: [''],
      price: ['']
    })
  }

  ngOnInit(): void {
    this.checkAction();
  }

  checkAction() {
    if (this.selectedId) {
      this.actionButtonLabel = "Update";
      this.patchDataValues();
    }
  }

  patchDataValues() {

  }

  emitAction() {
    this.action.emit({ value: this.form.value, action: this.actionButtonLabel });
  }

  clear() {
    this.form.reset();
  }
}

