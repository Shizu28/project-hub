import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavBar } from '../../components/nav-bar/nav-bar';

@Component({
  selector: 'app-home',
  imports: [NavBar],
  host: { class: 'block w-full h-full' },
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {
  private router = inject(Router);

  /*  navigateToProject() {
    this.router.navigate(['/project', id]);
  }*/

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
