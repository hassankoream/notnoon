
import { Component, inject, OnInit } from '@angular/core';
import { Iproduct, Rating } from '../../core/iproduct';
import { PostsService } from '../../posts.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  producsFriends:string[]=[]
  constructor(){
    this.producsFriends = this._PostsService.friends;
    
  }


  private readonly _PostsService = inject(PostsService)

  products: Iproduct[] =[]

   
  
  ngOnInit() {
    this._PostsService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        return res
      },
      error: (err) => {
       
      }
      
    });
    this._PostsService.productsSource.subscribe((products) => {
      this.products = products;
      // this._PostsService.friends.pop();
      // console.log(this._PostsService.friends);
      
      
    });
  }





}
