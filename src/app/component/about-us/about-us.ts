import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
features = [
    {
      title: 'Circuit Training',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'assets/images/img-7.jpg'
    },
    {
      title: 'Body Conditioning',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'assets/images/img-8.jpg'
    },
    {
      title: 'Group Exercise',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: 'assets/images/img-9.jpg'
    }
  ];
}
