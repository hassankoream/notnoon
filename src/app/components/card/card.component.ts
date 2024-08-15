import { Component, Input } from '@angular/core';
import { Iproduct } from '../../core/iproduct';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   @Input({required:true}) product!:Iproduct


   getTitleBeforeSeparator(title: string): string {
    const parts = title.split(/[\.,]/);
    return parts[0];
  }
  addToCart(event: Event):void{
    // console.log('Added to cart');
    event.stopPropagation();
    
    
  }
  showProduct():void{
    // console.log('Show Product dd');
  }
}
