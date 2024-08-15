
import {  AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Iproduct } from '../../core/iproduct';
import { PostsService } from '../../posts.service';
import { CardComponent } from "../card/card.component";
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent, LoadingComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, AfterViewInit {

  isLoading:boolean=true

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
        this.isLoading = false;
 
      },
      error: (err) => {
       console.log(err);
   
       
      },
      
    });
   
    


    this._PostsService.productsSource.subscribe((products) => {
      this.products = products;
      // this._PostsService.friends.pop();
      // console.log(this._PostsService.friends);
      this.isLoading = false;
      
    });


    
  }


  ngAfterViewInit(){
 
  }


}
