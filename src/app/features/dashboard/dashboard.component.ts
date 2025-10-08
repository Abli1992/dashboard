import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  metrics = [
    { label: 'Open Cases', value: 128, color: 'bg-[#2563eb]' },
    { label: 'Resolved Issues', value: 86, color: 'bg-[#16a34a]' },
    { label: 'Pending Reviews', value: 42, color: 'bg-[#f59e0b]' },
    { label: 'New Clients', value: 7, color: 'bg-[#9333ea]' }
  ];

  recentActivity = [
    { event: 'Case #1023 resolved', time: '2 hours ago' },
    { event: 'Uploaded invoice batch', time: '5 hours ago' },
    { event: 'New dispute created', time: '1 day ago' },
    { event: 'Client AGR updated info', time: '2 days ago' }
  ];
}
