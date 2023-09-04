import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,FormArray, Validators } from '@angular/forms';
import { BackendService } from 'src/app/Services/backend.service';

@Component({
  selector: 'app-doctypes',
  templateUrl: './doctypes.component.html',
  styleUrls: ['./doctypes.component.scss']
})
export class DoctypesComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private service : BackendService) {}
  ngOnInit() {
    this.form = this.fb.group({
      items: this.fb.array([]) // Initialize an empty FormArray
    });
    console.log(this.service.certificates)
    
  }
  inputfield:boolean = false;
  clickedIndex: number = 0;
  certificate_name:string = ""
  certificates: any = this.service.certificates;
  Fieldsarray: any = [];
  panelOpenState = false;
  searchText: string = '';
  certificatename: string = '';
  filteredItems: any = this.certificates;
  selecteditem(item:any,index:number){
    // console.log("", item);
    this.certificate_name = item.name;
    this.clickedIndex = index;
    // console.log(this.clickedIndex);
    console.log(this.service.certificates[this.clickedIndex].Fields)
    console.log(item.Fields);
    this.Fieldsarray = item.Fields;
   if(item.Fields.length>0){
    this.itemsFormArray.clear();
    // console.log("array");
    const initialData = item.Fields
    initialData.forEach((data:any) => {
      this.addItem(data);
      // console.log(data);
    } );
   }
   else{
    this.itemsFormArray.clear();
    //  this.addItem();
   }
  }

  onSearchTextChange() {
      this.filteredItems = this.certificates.filter((item:any) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  addfield(){
      this.inputfield = true;

    // if(this.inputfield = false){
    //   this.inputfield = true;
    // }
    // else{
    //   this.inputfield = false;
    // }
  }
  removefield(){
    this.inputfield = false;
  }

  onEnterfield(){
    this.service.certificates.push(
     {
      name: this.certificatename,
      status: 'Active',
      Fields:[]
     }
     )
     this.inputfield = false;
  }

  // addnewfield(){
  //   console.log(this.certificates[this.clickedIndex].Fields)
  //   this.certificates[this.clickedIndex].Fields.push(
  //     {
  //         Label:"",
  //         Description:""
  //     }
  //   )
  // }

  get itemsFormArray() {

    return this.form.controls['items'] as FormArray;
  }
  addItem(data?: { name: string; Description: string }) {
    const item = this.fb.group({
      name: [data ? data.name : '', Validators.required]
      // Description: [data ? data.Description : '', Validators.required]
      // Add more form controls as needed
    });

    this.itemsFormArray.push(item);
    console.log(this.itemsFormArray);
    console.log(this.service.certificates[this.clickedIndex].Fields);
  }

  removeItem(index: number) {
    const Fieldsarrayitem = this.service.certificates[this.clickedIndex].Fields;
    this.itemsFormArray.removeAt(index);
    console.log(Fieldsarrayitem);
    const filteredArray = Fieldsarrayitem.filter((item:any) => item !== index);
    this.service.certificates[this.clickedIndex].Fields = filteredArray;
  }

  onSubmit() {
    this.service.certificates[this.clickedIndex].Fields = [];
    if (this.form.valid) {
      console.log(this.service.certificates[this.clickedIndex].Fields);
      console.log(this.form.value.items);
      this.form.value.items.forEach((data:any) => {
      // this.service.certificates[this.clickedIndex].Fields = {};
      this.service.certificates[this.clickedIndex].Fields.push(data);
      // this.service.certificates[this.clickedIndex].push(data);
        console.log(data);
      }
      );
    }
  }
  enabledisable(){
   this.form.disable();
   console.log(this.form.disable());
   console.log(this.form);
   console.log(this.form.status);
   if(this.form.status == "DISABLED"){
    this.form.enable();
    console.log(this.form.status);
   }
   else if(this.form.status){
    this.form.disable();
    console.log(this.form.status);
   }
  }

}
