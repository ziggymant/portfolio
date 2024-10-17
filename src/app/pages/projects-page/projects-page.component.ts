import { Component } from '@angular/core';
import { PageLayoutComponent } from "@layouts/page-layout/page-layout.component";
import { ProjectsComponent } from "../../components/projects/projects.component";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [
    PageLayoutComponent,
    ProjectsComponent
  ],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {

}
