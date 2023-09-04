import { Component,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BackendService } from 'src/app/Services/backend.service';
import { FormBuilder, FormGroup, FormControl,FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-docissuepopup',
  templateUrl: './docissuepopup.component.html',
  styleUrls: ['./docissuepopup.component.scss']
})
export class DocissuepopupComponent {
  form!: FormGroup;
  selectedValue: any;
  FieldLables: any;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DocissuepopupComponent>,
    private service: BackendService,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}
    types:string = "";
  
 documenttypes:any = [this.service.certificates];
 ngOnInit(){
  this.form = this.fb.group({
    items: this.fb.array([]) // Initialize an empty FormArray
  });
 }
 selecteditem(index:number){
      console.log(index);
      console.log(this.service.certificates[index].Fields);
      this.FieldLables = this.service.certificates[index].Fields;
      this.itemsFormArray.clear();
      if(this.FieldLables.length>0){
        this.FieldLables.forEach( (element:any) => {
          console.log(element);
          this.addItem(
            {name:"",
             Label:element.name}
        )
        });

      }
      else{
       
      }
      
        
 }
 get itemsFormArray() {
  return this.form.controls['items'] as FormArray;
}

addItem(data?: { name: string , Label: string}) {
  const item = this.fb.group({
    name: [data ? data.name : '', Validators.required],
    Label:[data ? data.Label : '']
    // Description: [data ? data.Description : '', Validators.required]
    // Add more form controls as needed
  });
  this.itemsFormArray.push(item);
  console.log(this.itemsFormArray.value);
  // console.log(this.service.certificates[this.clickedIndex].Fields)
}

FinalForm() {
   console.log(this.form);
   console.log("form value")
}

onSubmit(){
  console.log(this.form.value);
}

}
