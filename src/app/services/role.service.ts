import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roles: Role[] = []; // Holds the list of roles

  constructor() { }

  getRoles(): Role[] {
    return this.roles.slice(); // Return a copy of the array
  }

  addRole(role: Role): void {
    this.roles.push(role);
    // Add logic to update roles list
  }

  // Additional methods for editing and removing roles can be added here
}
