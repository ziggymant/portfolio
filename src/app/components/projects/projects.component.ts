import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Project } from "@models/project.interface";
import { PROJECTS } from "./projects.data";
import { NgOptimizedImage } from "@angular/common";
import { observeElement, toggleVisibility } from "@helpers/functions";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent  implements AfterViewInit {
  @ViewChild('projectsContainer') projectsContainer: ElementRef;
  projects: Project[] = PROJECTS;

  ngAfterViewInit() {
    this.attachElementObservers();
  }

  attachElementObservers() {
    const container = this.projectsContainer.nativeElement as HTMLElement;
    const items = container.querySelectorAll('.zm-project')
    Array.from(items)?.forEach(el => {
      observeElement(el as HTMLElement, toggleVisibility)
    })
  }
}
