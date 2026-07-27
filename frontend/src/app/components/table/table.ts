import { Component, input, signal, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [DatePipe],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  router = inject(Router);
  headers = input<string[]>([]);
  rows = input<string[][]>([]);
  onRowClickFn = output<number>();
}
