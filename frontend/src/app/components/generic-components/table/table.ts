import { Component, input, signal, inject, output, TemplateRef, computed } from '@angular/core';
import { Router } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [NgTemplateOutlet],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  router = inject(Router);
  headers = input<string[]>([]);
  rows = input<string[][]>([]);
  onRowClickFn = output<number>();
  cellTemplate = input<TemplateRef<{ $implicit: string }>>();
  templateColumn = input<number>(-1);

  sortColumn = signal<number | null>(null);
  sortDirection = signal<'asc' | 'desc'>('asc');

  sortedRows = computed(() => {
    const indexed = this.rows().map((row, i) => ({ row, originalIndex: i }));
    const col = this.sortColumn();
    if (col === null) return indexed;
    const dir = this.sortDirection() === 'asc' ? 1 : -1;
    return indexed.toSorted((a, b) => dir * a.row[col].localeCompare(b.row[col], 'de'));
  });
  sortBy(col: number) {
    if (this.sortColumn() === col) {
      this.sortDirection.update((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortColumn.set(col);
      this.sortDirection.set('asc');
    }
  }
}
