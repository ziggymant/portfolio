import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatTab, MatTabGroup } from "@angular/material/tabs";

@Component({
  selector: 'app-about-modal',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatTabGroup,
    MatTab
  ],
  templateUrl: './about-modal.component.html',
  styleUrl: './about-modal.component.scss'
})
export class AboutModalComponent {

}
