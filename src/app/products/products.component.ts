import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducrsService } from '../producrs.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  Products: any[] = [];
  editingProductId: number | null = null; // ცვლადი განახლებისთვის

  constructor(private productService: ProducrsService) {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.Products = data;
    });
  }

  editProduct(Product: any) {
    this.editingProductId = Product.id;
    // this.ProductForm.setValue({ name: Product.name, email: Product.email });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('Product deleted');
      this.Products = this.Products.filter((Product) => Product.id !== id);
    });
  }

  resetForm() {
    // this.ProductForm.reset();
    this.editingProductId = null;
  }
}
