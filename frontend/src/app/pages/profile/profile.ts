import { Component } from '@angular/core';
import GenericPage from '../../components/generic-components/generic-page/generic-page';

@Component({
  selector: 'app-profile',
  imports: [GenericPage],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
