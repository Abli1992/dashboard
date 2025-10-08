import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  label: string;
  path: string;
  icon?: string; // emoji or text, using inline SVG in template
}

@Component({
  selector: 'app-sidebar-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.css']
})
export class SidebarNavigationComponent {
  @Input() items: NavItem[] = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Overbilling', path: '/overbilling' },
    { label: 'Shortages', path: '/shortages/current' },
    { label: 'Price Claims', path: '/price-claims' },
    { label: 'Redisputes', path: '/redisputes' },
    { label: 'Audits', path: '/audits' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'Uploads', path: '/uploads' },
    { label: 'Settings', path: '/settings' }
  ];

  @Input() collapsed = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle() { this.toggle.emit(); }
}
