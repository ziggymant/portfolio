import { Component } from '@angular/core';
import { ExperienceComponent } from "../../components/experience/experience.component";
import { PageLayoutComponent } from "@layouts/page-layout/page-layout.component";

@Component({
  selector: 'app-experience-page',
  standalone: true,
    imports: [
        ExperienceComponent,
        PageLayoutComponent
    ],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {

}
