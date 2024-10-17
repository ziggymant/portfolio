import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LayoutHeaderComponent } from '../layout-header/layout-header.component';
import { FooterComponent } from "@layouts/footer/footer.component";
import { AsideComponent } from "@layouts/aside/aside.component";

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
  standalone: true,
  imports: [LayoutHeaderComponent, FooterComponent, AsideComponent]
})
export class PageLayoutComponent implements OnInit {
  constructor() {

  }

  public ngOnInit(): void {

  }
}
