import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-faqs',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>FAQs</h2><p>Search and manage FAQs (internal only).</p></mat-card>`
})
export class FAQsComponent { }
