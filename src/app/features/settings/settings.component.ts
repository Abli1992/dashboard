import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-settings',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>Settings</h2><p>Profile & preferences.</p></mat-card>`
})
export class SettingsComponent { }
