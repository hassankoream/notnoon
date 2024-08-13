
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PostsService } from '../../posts.service';
import { Iproduct } from '../../core/iproduct';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  private readonly _PostsService = inject(PostsService)
    isChecked:boolean = false;
    changeCategory(category:string): any{
      const filteredProducts = this._PostsService.filterByCategory(category);
      this._PostsService.setProducts(filteredProducts);
    }


    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      // this._PostsService.friends.pop();
      
    }

    togglemenu():void{
      this.isChecked = !this.isChecked;
      // console.log('hello', this.isChecked);
      
    }
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      const screenWidth = event.target.innerWidth;
      if (screenWidth >= 900) {
        this.isChecked = true; // or any logic you need
      } else {
        this.isChecked = false;
      }
    }



  }

