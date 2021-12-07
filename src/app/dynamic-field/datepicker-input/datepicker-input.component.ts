import { Component, OnInit, Input, NgModule } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DemoMaterialModule } from "../../material-module";

@Component({
  selector: "app-datepicker-input",
  template: `
    <mat-form-field [formGroup]="formGroup" class="field-full-width">
      <mat-label>{{ label }}</mat-label>
      <input matInput [formControlName]="name" [matDatepicker]="picker" />
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `
})
export class DatepickerInputComponent implements OnInit {
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
  declarations: [DatepickerInputComponent],
  imports: [CommonModule, DemoMaterialModule, ReactiveFormsModule]
})
export class DatepickerInputModule {}
