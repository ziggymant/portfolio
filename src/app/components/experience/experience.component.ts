import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Experience } from "@models/experience.interface";
import { EXPERIENCE } from "./experience.data";
import { observeElement, toggleVisibility } from "@helpers/functions";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  @ViewChild('experienceList') experienceList: ElementRef;
  experience: Experience[] = EXPERIENCE;

  ngAfterViewInit() {
    this.attachElementObservers();
  }

  attachElementObservers() {
    const container = this.experienceList.nativeElement as HTMLElement;
    const listItems = container.querySelectorAll('li')
    Array.from(listItems)?.forEach(el => {
      observeElement(el, toggleVisibility)
    })
  }
}
