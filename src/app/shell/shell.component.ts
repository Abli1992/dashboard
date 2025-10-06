import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule,
    MatInputModule
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <!-- Sidebar -->
      <mat-sidenav mode="side" opened class="app-sidenav">
        <div class="brand">
          <img src="https://3733081a-b246-44e1-a1cd-1a80f53b01da-00-12pd3gcjgpjbk.janeway.replit.dev/@fs/home/runner/workspace/attached_assets/THC%20Logo.png" alt="The Hawker's Club" class="brand-logo" />
          <h1 class="brand-text">The Hawker's Club</h1>
        </div>

        <div class="account-badge">Amerrock</div>

        <mat-nav-list class="nav-list">
          <a mat-list-item routerLink="/overbilling" routerLinkActive="active">
            <mat-icon fontSet="material-icons-outlined">shopping_cart</mat-icon>
            <span>Amazon VC</span>
          </a>
          <a mat-list-item disabled>
            <mat-icon fontSet="material-icons-outlined">shopping_cart</mat-icon>
            <span>Amazon SC</span>
          </a>
          <a mat-list-item disabled>
            <mat-icon fontSet="material-icons-outlined">receipt_long</mat-icon>
            <span>Walmart</span>
          </a>
          <a mat-list-item disabled>
            <mat-icon fontSet="material-icons-outlined">home</mat-icon>
            <span>Home Depot</span>
          </a>

          <mat-divider></mat-divider>

          <a mat-list-item routerLink="/downloads" routerLinkActive="active">
            <mat-icon fontSet="material-icons-outlined">download</mat-icon>
            <span>Downloads</span>
          </a>
          <a mat-list-item routerLink="/uploads" routerLinkActive="active">
            <mat-icon fontSet="material-icons-outlined">upload</mat-icon>
            <span>Uploads</span>
          </a>
          <a mat-list-item routerLink="/faqs" routerLinkActive="active">
            <mat-icon fontSet="material-icons-outlined">description</mat-icon>
            <span>FAQs</span>
          </a>
          <a mat-list-item routerLink="/contacts" routerLinkActive="active">
            <mat-icon fontSet="material-icons-outlined">person</mat-icon>
            <span>Contact Us</span>
          </a>
          <a mat-list-item routerLink="/billing" routerLinkActive="active">
            <mat-icon fontSet="material-icons-outlined">credit_card</mat-icon>
            <span>Billing</span>
          </a>
          <a mat-list-item routerLink="/settings" routerLinkActive="active">
            <mat-icon fontSet="material-icons-outlined">settings</mat-icon>
            <span>Settings</span>
          </a>
        </mat-nav-list>

        <div class="logout">
          <a mat-list-item routerLink="/logout">
            <mat-icon fontSet="material-icons-outlined">logout</mat-icon>
            <span>Logout</span>
          </a>
        </div>
      </mat-sidenav>

      <!-- Main content -->
      <mat-sidenav-content>
        <mat-toolbar class="app-toolbar">
        <mat-form-field appearance="outline" class="search-box">
            <input matInput placeholder="Search…" />
          </mat-form-field>
          <span class="spacer"></span>
          
          <button mat-icon-button [matBadge]="" matBadgeColor="warn">
            <mat-icon fontSet="material-icons-outlined">notifications</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon fontSet="material-icons-outlined">settings</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon fontSet="material-icons-outlined">account_circle</mat-icon>
          </button>
        </mat-toolbar>

        <!-- Section chips -->
        <div class="pinned-chips">
          <mat-chip-set>
            <mat-chip routerLink="/overbilling" routerLinkActive="chip-active">Overbilling</mat-chip>
            <mat-chip routerLink="/shortages/current" routerLinkActive="chip-active">Current Shortages</mat-chip>
            <mat-chip routerLink="/shortages/aged" routerLinkActive="chip-active">Aged Shortages</mat-chip>
            <mat-chip routerLink="/missing-invoices" routerLinkActive="chip-active">Missing Invoices</mat-chip>
            <mat-chip routerLink="/audits" routerLinkActive="chip-active">Audits</mat-chip>
            <mat-chip routerLink="/price-claims" routerLinkActive="chip-active">Price Claims</mat-chip>
            <mat-chip routerLink="/redisputes" routerLinkActive="chip-active">Redisputes</mat-chip>
          </mat-chip-set>
        </div>

        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: 100vh;
    }
    .app-sidenav {
      width: 240px;
      background: #ffcc00;
      color: #111;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;
    }
    .brand {
      display: -webkit-box;
    }
    .brand-logo {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
    }
    .brand-text {
      font-size: 16px;
      font-weight: 700;
      color: #111;
    }
    .account-badge {
      background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));

      color: #000000;
      border-radius: 7px;
      font-size: 18px;
      font-weight: 600;
      margin: 10px;
      padding: 13px;
      text-align: center;
    }
    .nav-list a {
      font-weight: 500;
      font-size: 14px;
    }
    .nav-list a.active {
      background: rgba(0,0,0,0.1);
      border-radius: 8px;
    }
    .logout {
      margin-top: auto;
      padding-bottom: 16px;
    }
    .app-toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: #111;
      color: #fff;
    }
    .toolbar-title {
      font-weight: 600;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .search-box {
      width: 320px;
    margin-right: 8px;
    display: -webkit-box;
    background: white;
    }
    .pinned-chips {
      background: rgb(250 204 21 / var(--tw-bg-opacity, 1));
      padding: 8px 16px;
      position: sticky;
      top: 64px;
      z-index: 900;
      border-bottom: 1px solid #eee;
    }
    mat-chip {
      border-radius: 5px;
      padding: 0 12px;
      font-weight: 500;
    }
    .chip-active {
      background: rgb(253 224 71 / var(--tw-bg-opacity, 1)) !important;
      color: #fff !important;
    }
    .content {
      padding: 16px;
    }
  `]
})
export class ShellComponent {}
