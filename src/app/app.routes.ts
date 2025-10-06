import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const APP_ROUTES: Routes = [
  // login route
  { path: 'login', component: LoginComponent },

  // dashboard shell with all child routes
  {
    path: '',
    loadComponent: () => import('./shell/shell.component').then(m => m.ShellComponent),
    children: [
      { path: '', redirectTo: 'overbilling', pathMatch: 'full' },
      { path: 'overbilling', loadComponent: () => import('./features/overbilling/overbilling.component').then(m => m.OverbillingComponent) },
      { path: 'shortages/current', loadComponent: () => import('./features/shortages-current/shortages-current.component').then(m => m.ShortagesCurrentComponent) },
      { path: 'shortages/aged', loadComponent: () => import('./features/shortages-aged/shortages-aged.component').then(m => m.ShortagesAgedComponent) },
      { path: 'price-claims', loadComponent: () => import('./features/price-claims/price-claims.component').then(m => m.PriceClaimsComponent) },
      { path: 'redisputes', loadComponent: () => import('./features/redisputes/redisputes.component').then(m => m.RedisputesComponent) },
      { path: 'missing-invoices', loadComponent: () => import('./features/missing-invoices/missing-invoices.component').then(m => m.MissingInvoicesComponent) },
      { path: 'audits', loadComponent: () => import('./features/audits/audits.component').then(m => m.AuditsComponent) },
      { path: 'downloads', loadComponent: () => import('./features/downloads/downloads.component').then(m => m.DownloadsComponent) },
      { path: 'uploads', loadComponent: () => import('./features/uploads/uploads.component').then(m => m.UploadsComponent) },
      { path: 'faqs', loadComponent: () => import('./features/faqs/faqs.component').then(m => m.FAQsComponent) },
      { path: 'alerts', loadComponent: () => import('./features/alerts/alerts.component').then(m => m.AlertsComponent) },
      { path: 'contacts', loadComponent: () => import('./features/contacts/contacts.component').then(m => m.ContactUsComponent) },
      { path: 'client-services', loadComponent: () => import('./features/client-services/client-services.component').then(m => m.ClientServicesGridComponent) },
      { path: 'billing', loadComponent: () => import('./features/billing/billing.component').then(m => m.BillingComponent) },
      { path: 'spoof-account', loadComponent: () => import('./features/spoof/spoof.component').then(m => m.SpoofAccountComponent) },
      { path: 'settings', loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent) },
      { path: 'switch-account', loadComponent: () => import('./features/switch-account/switch-account.component').then(m => m.SwitchAccountComponent) },
      { 
  path: 'clients', 
  loadComponent: () => import('./features/client-select/client-select.component')
    .then(m => m.ClientSelectComponent)
}

    ]
  },

  // fallback
  { path: '**', redirectTo: 'login' }
];
