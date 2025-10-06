import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-contacts',
  imports: [CommonModule, MatCardModule],
  template: `<mat-card><h2>Contact Us</h2><p>Account manager info & meeting links.</p></mat-card>`
})
export class ContactUsComponent { }
