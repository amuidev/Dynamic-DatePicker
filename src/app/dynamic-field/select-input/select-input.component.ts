import { Component, OnInit, Input, NgModule } from "@angular/core";
import { DynamicFieldModel } from "../dynamic-field-model";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DemoMaterialModule } from "../../material-module";

@Component({
  selector: "app-select-input",
  template: `
    <mat-form-field [formGroup]="formGroup" class="field-full-width">
      <mat-label>{{ label }}</mat-label>
      <mat-select [formControlName]="name">
        <mat-option *ngFor="let opt of options" [value]="opt.value">
          {{ opt.label }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `
})
export class SelectInputComponent implements OnInit, DynamicFieldModel {
  @Input()
  formGroup: FormGroup;

  @Input()
  label: string;

  @Input()
  name: string;

  @Input()
  type: string;

  @Input()
  options: any[];

  constructor() {}

  ngOnInit() {}
}

@NgModule({
  declarations: [SelectInputComponent],
  imports: [CommonModule, DemoMaterialModule, ReactiveFormsModule]
})
export class SelectInputModule {}
