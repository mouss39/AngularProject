import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  dialogTitle:string;
  dialogMessage:string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {dataType: string}) { }

  ngOnInit(): void {
    switch (this.data.dataType) {
      case "conflict": this.dialogTitle="Conflict";
      this.dialogMessage="Email Already Exist, Please Use a Different Email or Try to Login";
       break;
      case "differentPass": this.dialogTitle="Error!";
      this.dialogMessage="Passwords Are Different";
      break;

      case "emptyValue": this.dialogTitle="Error!";
      this.dialogMessage="Please Fill All The Values";

      break;

      case "wrongEmailOrPass": this.dialogTitle="Error!";
      this.dialogMessage="Wrong Email or Password";

      break;
    }
 
  }

}
