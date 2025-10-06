import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  standalone: true,
  selector: 'app-shortages-current',
  imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIconModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule],
  template: `
  <mat-card class="table-card">
    <div class="section-header">
      <h2 style="margin:0;">Current Shortages</h2>
      <span class="total-pill">Total Recovered: <span class="green">{{ total | currency:currency }}</span></span>
      <div class="section-actions">
        <button mat-stroked-button><mat-icon>file_download</mat-icon> Download CSV</button>
      </div>
    </div>

    <div class="table-toolbar">
      <mat-form-field appearance="outline">
        <mat-label>Time Period From</mat-label>
        <input matInput [(ngModel)]="fromDate" placeholder="2024-01-01">
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>To</mat-label>
        <input matInput [(ngModel)]="toDate" placeholder="2024-12-31">
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Country</mat-label>
        <mat-select [(ngModel)]="country">
          <mat-option value="All">All</mat-option>
          <mat-option value="US">US</mat-option>
          <mat-option value="CA">CA</mat-option>
          <mat-option value="UK">UK</mat-option>
          <mat-option value="DE">DE</mat-option>
          <mat-option value="FR">FR</mat-option>
        </mat-select>
      </mat-form-field>
      <mat-form-field appearance="outline">
        <mat-label>Currency</mat-label>
        <mat-select [(ngModel)]="currency">
          <mat-option *ngFor="let c of currencies" [value]="c">{{ c }}</mat-option>
        </mat-select>
      </mat-form-field>
    </div>

    <table mat-table [dataSource]="rows" class="mat-elevation-z1">
      <ng-container matColumnDef="country">
        <th mat-header-cell *matHeaderCellDef> Country </th>
        <td mat-cell *matCellDef="let r"> {{ r.country }} </td>
      </ng-container>
      <ng-container matColumnDef="vcName">
        <th mat-header-cell *matHeaderCellDef> VC Name </th>
        <td mat-cell *matCellDef="let r"> {{ r.vcName }} </td>
      </ng-container>
      <ng-container matColumnDef="disputeId">
        <th mat-header-cell *matHeaderCellDef> Dispute ID </th>
        <td mat-cell *matCellDef="let r"> {{ r.disputeId }} </td>
      </ng-container>
      <ng-container matColumnDef="resolutionDate">
        <th mat-header-cell *matHeaderCellDef> Resolution Date </th>
        <td mat-cell *matCellDef="let r"> {{ r.resolutionDate }} </td>
      </ng-container>
      <ng-container matColumnDef="amount">
        <th mat-header-cell *matHeaderCellDef> Amount </th>
        <td mat-cell *matCellDef="let r"> {{ r.amount | currency:currency }} </td>
      </ng-container>
      <ng-container matColumnDef="backup">
        <th mat-header-cell *matHeaderCellDef> Download Backup Report </th>
        <td mat-cell *matCellDef="let r"><a href="#" (click)="$event.preventDefault()">Link</a></td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="cols"></tr>
      <tr mat-row *matRowDef="let row; columns: cols;"></tr>
    </table>
  </mat-card>

  <mat-card style="margin-top:16px;">
    <div class="section-header">
      <h3 style="margin:0;">Current Shortages — Service</h3>
      <mat-slide-toggle [(ngModel)]="enabled">Enabled</mat-slide-toggle>
    </div>
    <div *ngIf="!enabled" class="enable-card">
      <div>
        <p>You are not opted into this service — There is $0 recoverable on your account</p>
        <button mat-flat-button color="primary">Enable Current Shortages</button>
      </div>
    </div>
  </mat-card>
  `
})
export class ShortagesCurrentComponent {
  fromDate = '2024-01-01';
  toDate = '2024-12-31';
  country: 'All'|'US'|'CA'|'UK'|'DE'|'FR' = 'All';
  currency: 'USD'|'CAD'|'GBP'|'EUR'|'YEN'|'AUD'|'AED' = 'USD';
  currencies = ['USD','CAD','GBP','EUR','YEN','AUD','AED'];
  total = 25193;
  enabled = false;

  rows = [
    { country:'US', vcName:'LEV', disputeId:'DSPT10962961247', resolutionDate:'2024-03-01', amount:10806.37 },
    { country:'US', vcName:'LEV', disputeId:'DSPT10454656607', resolutionDate:'2024-07-12', amount:3797.36 },
    { country:'US', vcName:'LEV', disputeId:'DSPT1006824995',  resolutionDate:'2024-09-23', amount:7368.78 },
  ];
  cols = ['country','vcName','disputeId','resolutionDate','amount','backup'];
}
