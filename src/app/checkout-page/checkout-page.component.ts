import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { CartServiceService } from '../cart-service.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Product } from '../interface/product';
import { Observable,of } from 'rxjs';


@Component({
  selector: 'app-checkout-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent implements OnInit{
  public cart: Observable<Product[]> = of([])
  constructor(
    private cartService: CartServiceService
  ){}
  
  ngOnInit(): void {
         this.cart= this.cartService.getItems()
             this.cartService.clearCart() 
  }

  public getOnlyProductTotal(product: Product): number{
    return product.price*product.quantity
  }

  public downloadPDF(): void {
  const element = document.getElementById('receipt-section');

  if (!element) return;

  html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4'
    });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('receipt.pdf'); 
  });
}

}
