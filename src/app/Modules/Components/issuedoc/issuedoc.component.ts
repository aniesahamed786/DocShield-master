import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-issuedoc',
  templateUrl: './issuedoc.component.html',
  styleUrls: ['./issuedoc.component.scss']
})
export class IssuedocComponent  {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array([]) // Initialize an empty FormArray
    });
    const initialData = [
      { name: 'Item 1', quantity: 10 },
      { name: 'Item 2', quantity: 5 }
      // Add more initial data as needed
    ];

    initialData.forEach((data:any) => this.addItem(data));
    // Add initial form controls
    // this.addItem();
  }

  get itemsFormArray() {
    return this.form.controls['items'] as FormArray;
  }

  addItem(data?: { name: string; quantity: number }) {
    const item = this.fb.group({
      name: [data ? data.name : '', Validators.required],
      quantity: [data ? data.quantity : 0, Validators.min(0)]
      // Add more form controls as needed
    });

    this.itemsFormArray.push(item);
  }

  removeItem(index: number) {
    this.itemsFormArray.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
 
}
