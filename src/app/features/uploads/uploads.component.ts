import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface UploadRecord {
  id: number;
  documentType: string;
  uploadDate: string;
  fileName: string;
  fileSize: number;
  status: string;
}

@Component({
  selector: 'app-uploads',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],
})
export class UploadsComponent implements OnInit {
  uploads: UploadRecord[] = [];
  filteredUploads: UploadRecord[] = [];
  isLoading = true;

  searchTerm = '';
  typeFilter = 'all';

  documentTypes: string[] = ['Overbilling', 'Shortages', 'Missing Invoices', 'Audits'];

  ngOnInit(): void {
    // Simulate loading
    setTimeout(() => {
      // Start empty (no uploads)
      this.uploads = [];
      this.filteredUploads = this.uploads;
      this.isLoading = false;
    }, 1000);
  }

  applyFilters(): void {
    this.filteredUploads = this.uploads.filter((u) => {
      const matchesSearch =
        u.fileName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        u.documentType.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.typeFilter === 'all' || u.documentType === this.typeFilter;
      return matchesSearch && matchesType;
    });
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatDate(date: string): string {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  }

  getTypeColor(type: string): string {
    switch (type.toLowerCase()) {
      case 'overbilling': return 'badge-red';
      case 'shortages': return 'badge-orange';
      case 'missing invoices': return 'badge-yellow';
      case 'audits': return 'badge-blue';
      default: return 'badge-gray';
    }
  }

  handleDownload(file: UploadRecord): void {
    alert(`Download started for ${file.fileName}`);
  }

  handleDelete(file: UploadRecord): void {
    if (confirm(`Delete ${file.fileName}?`)) {
      this.uploads = this.uploads.filter(u => u.id !== file.id);
      this.applyFilters();
    }
  }
}
