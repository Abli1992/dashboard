import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-client-select',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './client-select.component.html',
  styleUrls: ['./client-select.component.scss']
})
export class ClientSelectComponent {
  search = '';
  clients = [
    'ABC', 'LEV', 'SWA', 'TCC', 'XYZ', 'PQR', 'DEF', 'HLC', 'MTR', 'JDC', 'GHL',
    'ZEP', 'ION', 'KRT', 'XPR', 'LMN', 'OAK', 'PLA', 'RCH', 'VEX', 'WAV',
    'TEX', 'HUB', 'BRN', 'SPC', 'ARC', 'SOL', 'FLO', 'NEX', 'QIC', 'RIV',
    'SYN', 'TRI', 'VIV', 'ZEN', 'YUK', 'ZIN'
  ];
  filteredClients = this.clients;

  ngOnInit() {
    this.filteredClients = this.clients;
  }

  filterClients() {
    this.filteredClients = this.clients.filter(c =>
      c.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  onSelect(client: string) {
    alert(`Selected client: ${client}`);
  }
}
