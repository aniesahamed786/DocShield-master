import { Component, inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import { SigninComponent } from '../Dialogs/signin/signin.component';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
  
    const mdConfig = new MatDialogConfig();
    // mdConfig.disableClose = true;
    mdConfig.width = "auto"
    mdConfig.height = "auto"
    mdConfig.position = {right:"0px",top:"5vw"}
    this.dialog.open(SigninComponent,mdConfig)
  }
}


