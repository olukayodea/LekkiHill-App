import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() title: string = "LekkiHill Clinic";
  showSearch: boolean = false;
  scrollTip: boolean = false;
  loader: boolean = true;

  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle( this.title );
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  toggleSearch(show: boolean) {
    this.showSearch = show;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    var scrolled = window.scrollY;

    if (scrolled > 20) {
      this.scrollTip = true;
    } else {
      this.scrollTip = false;
    }
  }

}
