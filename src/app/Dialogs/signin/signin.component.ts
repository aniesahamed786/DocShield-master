import { Component,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { slideRightToLeftAnimation } from '../../Animations/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [slideRightToLeftAnimation]
})
export class SigninComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<SigninComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}
signin(){
  this.router.navigateByUrl('/main');
  this.dialogRef.close();
}
password: string = '';
  hide: boolean = true;
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

}
