import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-client-services',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>Client Services Grid</h2><p>List of opted-in services for each client.</p></mat-card>`
})
export class ClientServicesGridComponent { }
