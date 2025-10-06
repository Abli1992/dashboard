import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-uploads',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>Uploads</h2><p>Upload files and track progress.</p></mat-card>`
})
export class UploadsComponent { }
