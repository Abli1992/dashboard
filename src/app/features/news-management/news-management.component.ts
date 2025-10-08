import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Alert {
  id: number;
  title: string;
  message: string;
  alertType: 'alert' | 'announcement' | 'warning' | 'info';
  priority: 'high' | 'medium' | 'low';
  targetAudience: 'external' | 'internal' | 'both';
  createdAt: string;
}

@Component({
  selector: 'app-news-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.css'],
})
export class NewsManagementComponent implements OnInit {
  showForm = false;
  isLoading = true;
  isSubmitting = false;

  alerts: Alert[] = [];
  filteredAlerts: Alert[] = [];

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(200)]],
      message: ['', [Validators.required]],
      alertType: ['announcement', Validators.required],
      priority: ['medium', Validators.required],
      targetAudience: ['external', Validators.required],
    });

    // Simulated API call
    setTimeout(() => {
      this.alerts = [
        {
          id: 1,
          title: 'System Maintenance Scheduled',
          message:
            'Scheduled maintenance will occur on Sunday, March 10th from 2:00 AM to 4:00 AM EST. During this time, the platform may be temporarily unavailable.',
          alertType: 'alert',
          priority: 'low',
          targetAudience: 'both',
          createdAt: '2025-06-07',
        },
        {
          id: 2,
          title: 'New Feature: Enhanced Reporting',
          message:
            "We've launched enhanced reporting capabilities with improved data visualization and export options.",
          alertType: 'announcement',
          priority: 'medium',
          targetAudience: 'internal',
          createdAt: '2025-06-07',
        },
      ];
      this.filteredAlerts = [...this.alerts];
      this.isLoading = false;
    }, 800);
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  getAlertIcon(alertType: string): string {
    switch (alertType) {
      case 'warning':
        return 'fa-triangle-exclamation text-orange-500';
      case 'announcement':
        return 'fa-message text-blue-500';
      case 'info':
        return 'fa-circle-info text-blue-500';
      default:
        return 'fa-circle-info text-gray-500';
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.isSubmitting = true;

    const newAlert: Alert = {
      id: Date.now(),
      ...this.form.value,
      createdAt: new Date().toISOString().split('T')[0],
    };

    setTimeout(() => {
      this.alerts.unshift(newAlert);
      this.filteredAlerts = [...this.alerts];
      this.isSubmitting = false;
      this.showForm = false;
      this.form.reset({
        alertType: 'announcement',
        priority: 'medium',
        targetAudience: 'external',
      });
    }, 700);
  }

  handleDelete(id: number): void {
    if (confirm('Delete this alert?')) {
      this.alerts = this.alerts.filter((a) => a.id !== id);
      this.filteredAlerts = [...this.alerts];
    }
  }
}
