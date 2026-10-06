import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  RouterLink, RouterLinkActive } from '@angular/router';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-products',
  imports: [ CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})


export class Products {
  selectedCategory: string = 'all';
  filteredProducts: Product[] = [];

  allProducts: Product[] = [
    { id: 1, name: 'מחשב נייד Pro', category: 'electronics', price: 4500 },
    { id: 2, name: 'מסך 27 אינץ׳', category: 'electronics', price: 1200 },
    { id: 3, name: 'חולצת דרייפיט', category: 'clothing', price: 120 },
    { id: 4, name: 'נעלי ריצה', category: 'clothing', price: 400 },
    { id: 5, name: 'תנור מיקרוגל', category: 'home', price: 600 },
    { id: 6, name: 'מכונת קפה', category: 'home', price: 850 }
  ];

  constructor(private route: ActivatedRoute) {
    // האזנה לשינויים בפרמטרים של ה-URL
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = params.get('category') || 'all';
      this.filterProducts();
    });
  }

  private filterProducts(): void {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = this.allProducts;
    } else {
      this.filteredProducts = this.allProducts.filter(
        product => product.category === this.selectedCategory
      );
    }
  }
 
}
