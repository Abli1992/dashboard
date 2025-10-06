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
  selector: 'app-overbilling',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  template: `
    <mat-card class="table-card">
      <div class="section-header">
        <h2>Overbilling</h2>
        <span class="total-pill">
          Total Recovered:
          <span class="green">{{ total | currency: currency }}</span>
        </span>
        <div class="section-actions">
          <button mat-stroked-button>
            <mat-icon>file_download</mat-icon>
            Download CSV
          </button>
        </div>
      </div>

      <div class="table-toolbar">
        <mat-form-field appearance="outline">
          <mat-label>Time Period From</mat-label>
          <input matInput [(ngModel)]="fromDate" placeholder="2024-01-01" />
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>To</mat-label>
          <input matInput [(ngModel)]="toDate" placeholder="2024-12-31" />
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

      <!-- Styled table -->
      <table mat-table [dataSource]="rows" class="recovery-table mat-elevation-z1">
        <ng-container matColumnDef="country">
          <th mat-header-cell *matHeaderCellDef>Country</th>
          <td mat-cell *matCellDef="let r">{{ r.country }}</td>
        </ng-container>

        <ng-container matColumnDef="vcName">
          <th mat-header-cell *matHeaderCellDef>VC Name</th>
          <td mat-cell *matCellDef="let r">{{ r.vcName }}</td>
        </ng-container>

        <ng-container matColumnDef="disputeId">
          <th mat-header-cell *matHeaderCellDef>Dispute ID</th>
          <td mat-cell *matCellDef="let r">{{ r.disputeId }}</td>
        </ng-container>

        <ng-container matColumnDef="resolutionDate">
          <th mat-header-cell *matHeaderCellDef>Resolution Date</th>
          <td mat-cell *matCellDef="let r">{{ r.resolutionDate }}</td>
        </ng-container>

        <ng-container matColumnDef="amount">
          <th mat-header-cell *matHeaderCellDef>Amount</th>
          <td mat-cell *matCellDef="let r">{{ r.amount | currency: currency }}</td>
        </ng-container>

        <ng-container matColumnDef="backup">
          <th mat-header-cell *matHeaderCellDef>Download Backup Report</th>
          <td mat-cell *matCellDef="let r">
            <button mat-stroked-button color="primary">
              <mat-icon>download</mat-icon> Download
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="cols"></tr>
        <tr mat-row *matRowDef="let row; columns: cols"></tr>
      </table>
    </mat-card>

    <!-- Service section -->
    <mat-card style="margin-top: 16px;">
      <div class="section-header">
        <h3>Overbilling — Service</h3>
        <mat-slide-toggle [(ngModel)]="enabled">Enabled</mat-slide-toggle>
      </div>
      <div *ngIf="!enabled" class="enable-card">
        <div>
          <p>You are not opted into this service — There is $0 recoverable on your account</p>
          <button mat-flat-button color="primary">Enable Overbilling</button>
        </div>
      </div>
    </mat-card>
  `,
  styles: [`
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .total-pill {
      background: #f9fafb;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 14px;
    }

    .green {
      color: #16a34a;
      font-weight: 600;
      margin-left: 4px;
    }

    .table-toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 16px;
    }

    .recovery-table {
  width: 100%;
  border-radius: 8px;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  font-size: 14px;
  color: #111827;
  padding: 10px;
  

  th {
    background-color: #f9fafb;
    text-transform: uppercase;
    font-weight: 600;
    color: #6b7280;
    padding: 12px 16px;
    border-bottom: 1px solid #e5e7eb;
  }

  td {
    padding: 14px 16px;
    border-bottom: 1px solid #f1f1f1;
  }

  tr:nth-child(even) td {
    background-color: #f9fafb; /* light grey */
  }

  tr:nth-child(odd) td {
    background-color: #ffffff;
  }

  tr:first-child th:first-child {
    border-top-left-radius: 8px;
  }

  tr:first-child th:last-child {
    border-top-right-radius: 8px;
  }

  button[mat-stroked-button] {
    border-color: #d1d5db;
    color: #111827;
    font-weight: 500;
    text-transform: none;
  }

  .mat-icon {
    font-size: 18px;
    margin-right: 4px;
  }
}

 .enable-card {
      padding: 16px;
      text-align: center;
      background: #f9fafb;
      border-radius: 8px;
    }
  `]
})
export class OverbillingComponent {
  fromDate = '2024-01-01';
  toDate = '2024-12-31';
  country: 'All' | 'US' | 'CA' | 'UK' | 'DE' | 'FR' = 'All';
  currency: 'USD' | 'CAD' | 'GBP' | 'EUR' | 'YEN' | 'AUD' | 'AED' = 'USD';
  currencies = ['USD', 'CAD', 'GBP', 'EUR', 'YEN', 'AUD', 'AED'];
  total = 25193;
  enabled = false;

  rows = [
    { country: 'US', vcName: 'LEV', disputeId: 'DSPT1096296124', resolutionDate: '3/1/24', amount: 10806.37 },
    { country: 'US', vcName: 'LEV', disputeId: 'DSPT1045466607', resolutionDate: '7/12/24', amount: 3797.36 },
    { country: 'US', vcName: 'LEV', disputeId: 'DSPT1060824995', resolutionDate: '9/23/24', amount: 7368.78 },
    { country: 'US', vcName: 'LEV', disputeId: 'DSPT1095115427', resolutionDate: '11/26/24', amount: 3220.85 },
  ];

  cols = ['country', 'vcName', 'disputeId', 'resolutionDate', 'amount', 'backup'];
}
