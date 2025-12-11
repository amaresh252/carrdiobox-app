import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
