import { Component } from '@angular/core';
import { PageLayoutComponent } from "@layouts/page-layout/page-layout.component";
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { NgIf } from "@angular/common";
import { AboutComponent } from "../../components/about/about.component";
import { ExperienceComponent } from "../../components/experience/experience.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { TrainingComponent } from "../../components/training/training.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageLayoutComponent, NgIf, ProgressBarComponent, AboutComponent, ExperienceComponent, ProjectsComponent, TrainingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
