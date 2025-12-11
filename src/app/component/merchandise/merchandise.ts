import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

interface Product {
  name: string;
  price: string;
  image: string;
}
@Component({
  selector: 'app-merchandise',
  imports: [CommonModule],
  templateUrl: './merchandise.html',
  styleUrl: './merchandise.scss',
})
export class Merchandise {
products: Product[] = [
    {
      name: 'T shirts',
      price: '£ 20.00',
      image: 'assets/images/product-1.jpg'
    },
    {
      name: 'Mugs',
      price: '£ 49.00',
      image: 'assets/images/product-2.jpg'
    },
    {
      name: 'Mouse Mats',
      price: '£ 35.00',
      image: 'assets/images/product-3.jpg'
    },
    {
      name: 'Nike Sports Water Bottle',
      price: '£ 45.00',
      image: 'assets/images/product-4.jpg'
    }
  ];
}
