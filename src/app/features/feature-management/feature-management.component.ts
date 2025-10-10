import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feature-management.component.html',
  styleUrls: ['./feature-management.component.css']
})
export class FeatureManagementComponent {
  private http = inject(HttpClient);

  // --- UI state ---
  clients = signal<any[]>([]);
  features = signal<any[]>([]);
  notes = signal<any[]>([]);
  selectedClientId = signal<number | null>(null);
  newNote = signal<string>('');
  loading = signal<boolean>(false);
  expanded = signal({ recovery: true, marketplace: true, notes: false });

  RECOVERY_TYPES = [
    { name: 'Overbilling', key: 'overbilling' },
    { name: 'Aged Shortages', key: 'aged_shortages' },
    { name: 'Current Shortages', key: 'current_shortages' },
    { name: 'Current Price Claims', key: 'current_price_claims' },
    { name: 'Missing Invoices', key: 'missing_invoices' },
    { name: 'Audits', key: 'audits' }
  ];

  MARKETPLACES = [
    { name: 'Amazon', key: 'amazon' },
    { name: 'Walmart', key: 'walmart' },
    { name: 'Home Depot', key: 'homedepot' }
  ];

  constructor() {
    this.loadClients();
  }

  // --- API Methods ---
  loadClients() {
    this.http.get<any[]>('/api/clients').subscribe((res) => this.clients.set(res || []));
  }

  loadClientData() {
    const id = this.selectedClientId();
    if (!id) return;

    this.loading.set(true);
    this.http.get<any[]>(`/api/client-features/${id}`).subscribe((features) => {
      this.features.set(features || []);
      this.loading.set(false);
    });

    this.http.get<any[]>(`/api/client-notes/${id}`).subscribe((notes) => {
      this.notes.set(notes || []);
    });
  }

  initializeFeatures() {
    const id = this.selectedClientId();
    if (!id) return;

    const all = [
      ...this.RECOVERY_TYPES.map((r) => ({
        clientId: id,
        featureType: 'recovery_type',
        featureName: r.key,
        isEnabled: true
      })),
      ...this.MARKETPLACES.map((m) => ({
        clientId: id,
        featureType: 'marketplace',
        featureName: m.key,
        isEnabled: true
      }))
    ];

    this.http.post('/api/client-features/initialize', { features: all }).subscribe(() => {
      this.loadClientData();
    });
  }

  toggleFeature(feature: any) {
    this.http
      .put(`/api/client-features/${feature.id}`, { isEnabled: !feature.isEnabled })
      .subscribe(() => {
        feature.isEnabled = !feature.isEnabled;
      });
  }

  addNote() {
    const note = this.newNote().trim();
    const id = this.selectedClientId();
    if (!note || !id) return;

    this.http.post('/api/client-notes', { clientId: id, note }).subscribe(() => {
      this.newNote.set('');
      this.loadClientData();
    });
  }

  // --- Helpers ---
  getFeatureStatus(key: string, type: string) {
    const f = this.features().find((x) => x.featureName === key && x.featureType === type);
    return f?.isEnabled ?? false;
  }

  getFeature(key: string, type: string) {
    return this.features().find((x) => x.featureName === key && x.featureType === type);
  }

  toggleSection(section: 'recovery' | 'marketplace' | 'notes') {
    const state = { ...this.expanded() };
    state[section] = !state[section];
    this.expanded.set(state);
  }
  onClientChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  const value = +target.value;
  if (!isNaN(value)) {
    this.selectedClientId.set(value);
    this.loadClientData();
  }
}

}
