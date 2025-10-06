import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-spoof',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>Spoof Account</h2><p>Internal-only sample account.</p></mat-card>`
})
export class SpoofAccountComponent { }
