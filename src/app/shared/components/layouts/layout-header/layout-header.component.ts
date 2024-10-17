import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass]
})
export class LayoutHeaderComponent implements OnInit {
  scrollToTop = true;

  public ngOnInit(): void {
    window.onscroll =  () => {
      const documentElement = document.documentElement; // For IE with doctype
      this.scrollToTop = documentElement.scrollTop <= 5;
    };
  }
}
