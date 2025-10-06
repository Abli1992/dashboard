import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-billing',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>Billing</h2><p>QuickBooks status and invoice list.</p></mat-card>`
})
export class BillingComponent { }
