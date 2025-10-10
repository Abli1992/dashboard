import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent {
  // ✅ Mock user data (can later be replaced with API calls)
  profile = signal({
    id: 2,
    firstName: 'Internal',
    lastName: 'User',
    email: 'internal@example.com',
    phone: '+1 0793677344',
    userType: 'Internal',
  });

  editingField = signal<string | null>(null);
  showPasswordForm = signal(false);

  // ✅ Editable temporary values
  tempValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  // --- UI Helpers ---
  startEdit(field: string) {
    this.editingField.set(field);
    const profile = this.profile();
    this.tempValues = { ...this.tempValues, ...profile };
  }

  cancelEdit() {
    this.editingField.set(null);
  }

  saveEdit(field: keyof typeof this.tempValues) {
  const updated = { ...this.profile(), [field]: this.tempValues[field] };
  this.profile.set(updated as any);
  this.editingField.set(null);
}

  updatePassword() {
    if (this.tempValues.newPassword !== this.tempValues.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    alert('Password updated successfully');
    this.showPasswordForm.set(false);
    this.tempValues.currentPassword = '';
    this.tempValues.newPassword = '';
    this.tempValues.confirmPassword = '';
  }
}
