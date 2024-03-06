import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Role } from '../models/role.model';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent {
  @Input() roles?: Role[];  // Roles of the selected engineer
  @Output() editRole = new EventEmitter<Role>();  // Event to edit a role
  @Output() addRole = new EventEmitter();  // Event to add a new role

  // Function to emit the edit role event
  onEditRole(role: Role) {
    this.editRole.emit(role);
  }

  // Function to emit the add role event
  onAddRole() {
    this.addRole.emit();
  }
}
