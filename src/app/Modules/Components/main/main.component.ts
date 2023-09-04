import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import { DocissuepopupComponent } from 'src/app/shared-dialogs/docissuepopup/docissuepopup.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor( private router: Router, public dialog: MatDialog){}

  ngOnInit(){
     this.router.navigateByUrl('/home')
  }  
  
  issuedoc() {
  
    const mdConfig = new MatDialogConfig();
    // mdConfig.disableClose = true;
    mdConfig.width = "auto"
    mdConfig.height = "auto"
    mdConfig.position = {right:"25px",top:"5vw"}
    this.dialog.open(DocissuepopupComponent,mdConfig);
    console.log("opened issue document")
  }

}
