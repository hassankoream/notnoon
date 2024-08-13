import { Iproduct } from './core/iproduct';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {



  // searchTerm:string = "";


  friends:string[] = ['blog', 'facebook', 'twitter', 'inst']

  filteredData:Iproduct[]=[]
  productsData: Iproduct[] = [];
  constructor(private _HttpClient:HttpClient) { 
    this.fetchProducts();
  }

  getProducts():Observable<any>{
   return this._HttpClient.get('https://fakestoreapi.com/products')
  }

 private fetchProducts(): void {
  this.getProducts().subscribe({
    next: (res) => {
      this.productsData = res;
      return res
    },
    error: (err) => {
     
    }
    
  });
  
}

filterByCategory(searchTerm:string): Iproduct[] {
  if(searchTerm !== ''){
    //                                             item    (   this is the condition         ) it returns array of objects
     this.filteredData = this.productsData.filter(product => product.category === searchTerm);
   
  }
  else{
    this.filteredData = this.productsData;
 
    
  }
  return this.filteredData;
}

productsSource = new Subject<Iproduct[]>();

  setProducts(products: Iproduct[]) {
    this.productsSource.next(products);
  }
}
