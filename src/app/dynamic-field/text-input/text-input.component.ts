import { Component, OnInit, Input, NgModule } from "@angular/core";
import { DynamicFieldModel } from "../dynamic-field-model";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DemoMaterialModule } from "../../material-module";

@Component({
  selector: "app-text-input",
  template: `
    <mat-form-field [formGroup]="formGroup" class="field-full-width">
      <mat-label>{{ label }}</mat-label>
      <input matInput [formControlName]="name" />
    </mat-form-field>
  `
})
export class TextInputComponent implements OnInit, DynamicFieldModel {

  @Input()
  formGroup: FormGroup;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  type: string;

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, DemoMaterialModule, ReactiveFormsModule]
})
class TextInputModule {}

