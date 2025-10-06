import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-switch-account',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>Switch Account</h2><p>Switch between brands.</p></mat-card>`
})
export class SwitchAccountComponent { }
