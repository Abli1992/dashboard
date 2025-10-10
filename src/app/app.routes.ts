import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const APP_ROUTES: Routes = [
  // 🔹 Public routes
  { path: 'login', component: LoginComponent },
  {
    path: 'client-selection',
    loadComponent: () =>
      import('./features/client-selection/client-selection.component').then(
        (m) => m.ClientSelectionComponent
      ),
  },
  {
    path: 'switch-account',
    loadComponent: () =>
      import('./features/client-selection/client-selection.component').then(
        (m) => m.ClientSelectionComponent
      ),
  },

  // 🔸 Authenticated shell routes
  {
    path: '',
    loadComponent: () =>
      import('./shell/shell.component').then((m) => m.ShellComponent),
    children: [
      // Default redirect
      { path: '', redirectTo: 'amazon-vc-dashboard', pathMatch: 'full' },

      // Core Pages
      {
        path: 'amazon-vc-dashboard',
        loadComponent: () =>
          import('./features/amazon-vc-dashboard/amazon-vc-dashboard.component').then(
            (m) => m.AmazonVCDashboardComponent
          ),
      },
      
      

      // ✅ New Uploads Section (React-equivalent)
      {
        path: 'uploads',
        loadComponent: () =>
          import('./features/uploads/uploads.component').then(
            (m) => m.UploadsComponent
          ),
      },

      // ✅ Existing Downloads Section
      {
        path: 'downloads',
        loadComponent: () =>
          import('./features/downloads/downloads.component').then(
            (m) => m.DownloadsComponent
          ),
      },

      
     
     
      
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'news-management',
        loadComponent: () =>
          import('./features/news-management/news-management.component').then(
            (m) => m.NewsManagementComponent
          ),
      },
      {
        path: 'feature-management',
        loadComponent: () =>
          import('./features/feature-management/feature-management.component').then(
            (m) => m.FeatureManagementComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/user-settings/user-settings.component').then(
            (m) => m.UserSettingsComponent
          ),
      },
      {
        path: 'faq',
        loadComponent: () =>
          import('./features/faq/faq.component').then((m) => m.FaqComponent),
      },



    ],
  },

  // 🔸 Fallback
  { path: '**', redirectTo: 'login' },
];
