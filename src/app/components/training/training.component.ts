import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { observeElement, toggleVisibility } from "@helpers/functions";
import { Course } from "@models/project.interface";
import { COURSES } from "./courses.data";

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent implements AfterViewInit {
  @ViewChild('trainingContainer') trainingContainer: ElementRef;
  courses: Course[] = COURSES;
  ngAfterViewInit() {
    this.attachElementObservers();
  }

  attachElementObservers() {
    const container = this.trainingContainer.nativeElement as HTMLElement;
    const items = container.querySelectorAll('.zm-training')
    Array.from(items)?.forEach(el => {
      observeElement(el as HTMLElement, toggleVisibility)
    })
  }
}
