import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DashboardRow {
  country: string;
  vcName: string;
  disputeId: string;
  resolutionDate: string;
  amount: number;
  backupLink: string;
}

interface DashboardSection {
  id: string;
  title: string;
  enabled: boolean;
  totalRecovered: number;
  rows: DashboardRow[];
  emptyMessage?: string;
}

@Component({
  standalone: true,
  selector: 'app-amazon-vc-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './amazon-vc-dashboard.component.html',
  styleUrls: ['./amazon-vc-dashboard.component.css']
})
export class AmazonVCDashboardComponent implements OnInit {
  activeSection = 'overbilling';
  sections: DashboardSection[] = [];

  // Filters
  filterCountry = 'All';
  filterCurrency = 'USD';
  startDate = '';
  endDate = '';

  ngOnInit(): void {
    // ✅ Initialize all sections
    this.sections = [
      {
        id: 'overbilling',
        title: 'Overbilling',
        enabled: true,
        totalRecovered: 25193.0,
        rows: [
          {
            country: 'US',
            vcName: 'LEV',
            disputeId: 'DSPT1096296124',
            resolutionDate: '3/1/24',
            amount: 10806.37,
            backupLink: '#'
          },
          {
            country: 'CA',
            vcName: 'LEV',
            disputeId: 'DSPT1045466607',
            resolutionDate: '7/12/24',
            amount: 3797.36,
            backupLink: '#'
          },
          {
            country: 'UK',
            vcName: 'LEV',
            disputeId: 'DSPT1060824995',
            resolutionDate: '9/23/24',
            amount: 7368.78,
            backupLink: '#'
          },
          {
            country: 'DE',
            vcName: 'LEV',
            disputeId: 'DSPT1095115427',
            resolutionDate: '11/26/24',
            amount: 3220.85,
            backupLink: '#'
          },
          {
            country: 'FR',
            vcName: 'LEV',
            disputeId: 'DSPT1072463651',
            resolutionDate: '1/23/25',
            amount: 41145.74,
            backupLink: '#'
          }
        ]
      },
      {
        id: 'current-shortages',
        title: 'Current Shortages',
        enabled: false,
        totalRecovered: 0,
        rows: [],
        emptyMessage:
          'You are not opted into this service - There is $0 recoverable on your account'
      },
      {
        id: 'aged-shortages',
        title: 'Aged Shortages',
        enabled: false,
        totalRecovered: 0,
        rows: [],
        emptyMessage:
          'You are not opted into this service - There is $0 recoverable on your account'
      },
      {
        id: 'missing-invoices',
        title: 'Missing Invoices',
        enabled: false,
        totalRecovered: 0,
        rows: [],
        emptyMessage: 'No missing invoices data available'
      },
      {
        id: 'price-claims',
        title: 'Price Claims',
        enabled: true,
        totalRecovered: 0,
        rows: [
          {
            country: 'US',
            vcName: 'LEV',
            disputeId: 'DSPT1096296124',
            resolutionDate: '3/1/24',
            amount: 10806.37,
            backupLink: '#'
          },
          {
            country: 'CA',
            vcName: 'LEV',
            disputeId: 'DSPT1045466607',
            resolutionDate: '7/12/24',
            amount: 3797.36,
            backupLink: '#'
          }
        ]
      },
      {
        id: 'redisputes',
        title: 'Redisputes',
        enabled: false,
        totalRecovered: 0,
        rows: [],
        emptyMessage:
          'You are not opted into this service - There is $0 recoverable on your account'
      },
      {
        id: 'audits',
        title: 'Audits',
        enabled: false,
        totalRecovered: 66339.0,
        rows: [],
        emptyMessage:
          'You are not opted into this service - There is $66,339 recoverable on your account'
      }
    ];
  }

  // 💲 Format currency properly
  formatMoney(value: number): string {
    return `$${value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  }

  // ✅ Toggle the section switch
  toggleSection(section: DashboardSection): void {
    section.enabled = !section.enabled;
  }

  // ✅ Scroll to section when clicking Jump buttons
  scrollToSection(sectionId: string): void {
    this.activeSection = sectionId;
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ✅ Mock download button
  downloadRow(disputeId: string): void {
    alert(`Downloading backup report for ${disputeId}`);
  }

  // ✅ Mock filters
  applyFilter(): void {
    console.log('Applying filters:', {
      startDate: this.startDate,
      endDate: this.endDate,
      country: this.filterCountry,
      currency: this.filterCurrency
    });
  }
}
