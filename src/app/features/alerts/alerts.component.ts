import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-alerts',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>Alerts</h2><p>Approvals and brand updates.</p></mat-card>`
})
export class AlertsComponent { }
