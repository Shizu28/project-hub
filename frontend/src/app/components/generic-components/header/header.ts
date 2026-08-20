import { Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { ProfileIcon } from '../../profile-icon/profile-icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NavBar, ProfileIcon, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
