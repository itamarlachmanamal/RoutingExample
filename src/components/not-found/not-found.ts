import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  constructor(private router: Router){
  }

  goHome(): void {
    if (!confirm("Are You sure"))
      return;
    
    this.router.navigate(['/']);
  }
}
