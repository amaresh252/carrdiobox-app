import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
images = [
    'assets/images/img-1.jpg',
    'assets/images/img-2.jpg',
    'assets/images/img-3.jpg'
  ];
  videoImages = [
    'assets/images/img-4.jpg',
    'assets/images/img-5.jpg',
    'assets/images/img-6.jpg'
  ];
}
