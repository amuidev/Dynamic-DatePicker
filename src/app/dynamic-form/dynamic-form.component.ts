import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { DynamicFieldModel } from "../dynamic-field";
import { FormConfig } from "../form-config";

@Component({
  selector: "app-dynamic-form",
  template: `
    Dynamic Form:
    <form [formGroup]="formGroup">
      <div *ngFor="let field of formConfig">
        <app-dynamic-field
          [formGroup]="formGroup"
          [name]="field.name"
          [type]="field.type"
          [label]="field.label"
          [options]="field.options || []"
        ></app-dynamic-field>
      </div>
    </form>
    <br/>Form Values:
    <pre>{{ formGroup.value | json }}</pre>
  `
})
export class DynamicFormComponent implements OnInit {
  formGroup: FormGroup;
  formConfig = FormConfig;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm(this.formConfig);
  }

  buildForm(formConfig: DynamicFieldModel[]) {
    let form = {};
    formConfig.forEach(
      field => (form = { ...form, [field.name]: new FormControl("") })
    );
    this.formGroup = this.fb.group(form);
  }
}
