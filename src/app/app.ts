import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './component/header/header';
import { Home } from './component/home/home';
import { AboutUs } from './component/about-us/about-us';
import { PersonalTraining } from './component/personal-training/personal-training';
import { Merchandise } from './component/merchandise/merchandise';
import { Footer } from './component/footer/footer';
import { Gallery } from './component/gallery/gallery';

@Component({
  selector: 'app-root',
  imports: [Header,Home,AboutUs,PersonalTraining,Gallery,Merchandise,Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cardiobox');
}
