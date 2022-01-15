import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  showSearch: boolean = false;
  scrollTip: boolean = false;
  loader: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
      console.log("yes");
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
