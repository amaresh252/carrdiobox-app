import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 isCollapsed = true;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('window:resize')
  onResize() {
    // close menu on resize to larger screens
    if (window.innerWidth >= 992 && !this.isCollapsed) {
      this.isCollapsed = true;
    }
  }
}
