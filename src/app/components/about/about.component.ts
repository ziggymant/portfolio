import { Component, inject } from '@angular/core';
import { Skill } from "@models/project.interface";
import { SKILLS } from "./about.data";
import { MatButton } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { AboutModalComponent } from "../../shared/components/about-modal/about-modal.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills: Skill[] = SKILLS;
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(AboutModalComponent, {
      height: 'auto',
      width: '80vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
