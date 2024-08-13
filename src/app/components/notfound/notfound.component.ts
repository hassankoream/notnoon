import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  private readonly _PostsService = inject(PostsService)


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
    
  }
}
