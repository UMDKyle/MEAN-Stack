import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../Services/product';

@Component({
  selector: 'app-products-component',
  imports: [],
  templateUrl: './products-component.html',
  styleUrl: './products-component.scss',
})
export class ProductsComponent implements OnInit{
  private productService = inject(ProductService);

  products = signal<any[]>([]);

  ngOnInit(): void {
    this.productService.getProduct().subscribe({
      next: (res:any)=>{
        this.products.set(res.products);
        console.log(res);
      },
      error: (err) =>{
        console.error('request failed', err);
      },
      complete: () =>{
        console.log('request complete');
      }

    })

  }
}
