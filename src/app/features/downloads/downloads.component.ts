import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DownloadRecord {
  id: number;
  type: string;
  downloadDate: string;
  country: string;
  vcName: string;
  timePeriod: string;
  currency: string;
  fileName: string;
  fileSize: number;
  status: string;
}

@Component({
  selector: 'app-downloads',
  standalone: true, // 👈 make sure it's standalone if not already
  imports: [CommonModule, FormsModule], // ✅ this fixes the ngModel errors
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css'],
})
export class DownloadsComponent implements OnInit {
  downloads: DownloadRecord[] = [];
  filteredDownloads: DownloadRecord[] = [];
  isLoading = true;

  searchTerm = '';
  typeFilter = 'all';
  countryFilter = 'all';

  uniqueTypes: string[] = [];
  uniqueCountries: string[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.downloads = [
        
      ];

      this.isLoading = false;
      this.uniqueTypes = Array.from(new Set(this.downloads.map(d => d.type)));
      this.uniqueCountries = Array.from(new Set(this.downloads.map(d => d.country)));
      this.applyFilters();
    }, 1000);
  }

  applyFilters(): void {
    this.filteredDownloads = this.downloads.filter((d) => {
      const matchesSearch =
        d.fileName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        d.type.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.typeFilter === 'all' || d.type === this.typeFilter;
      const matchesCountry = this.countryFilter === 'all' || d.country === this.countryFilter;
      return matchesSearch && matchesType && matchesCountry;
    });
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  handleDownload(file: DownloadRecord): void {
    const blob = new Blob([`Download data for ${file.fileName}`], {
      type: file.fileName.endsWith('.pdf')
        ? 'application/pdf'
        : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    alert(`Download started for ${file.fileName}`);
  }

  formatDate(date: string): string {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  }
}
