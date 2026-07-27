import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@primeicons/angular';

@Component({
  selector: 'app-profile-icon',
  imports: [User],
  templateUrl: './profile-icon.html',
  styleUrl: './profile-icon.css',
})
export class ProfileIcon {
  path = input<string>('');

  private router = inject(Router);
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
