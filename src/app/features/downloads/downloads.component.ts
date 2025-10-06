import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-downloads',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>Downloads</h2><p>Recent report exports will appear here.</p></mat-card>`
})
export class DownloadsComponent { }
