import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-selection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-selection.component.html',
  styleUrls: ['./client-selection.component.css']
})
export class ClientSelectionComponent {
  searchTerm = '';

  clients = [
    'ADV', 'AFF', 'AFI', 'AGR', 'AIP', 'ALM', 'AMB', 'AMR', 'ANC',
    'ASL', 'ASP', 'ATN', 'ATX', 'AVR', 'AXE', 'BAF', 'BAR', 'BBO',
    'SWD', 'UMB', 'VHE', 'WMF', 'WOA', 'WWS', 'ZAG', 'BLS', 'TOD',
    'VYV', 'DBS', 'DYG', 'SIG', 'ILLY_US', 'ILLY_CA', 'SEV', 'AFF', 'IPF', 'SCO'
  ];

  get filteredClients() {
    const term = this.searchTerm.toLowerCase();
    return this.clients.filter(client => client.toLowerCase().includes(term));
  }

  onClientClick(client: string) {
    alert(`Selected client: ${client}`);
  }

  logout() {
    alert('You have logged out.');
  }
}
