import { Injectable } from '@angular/core';
import { Engineer } from '../models/engineer.model';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {
  private engineers: Engineer[] = []; // Holds the list of engineers

  constructor() { }

  getEngineers(): Engineer[] {
    return this.engineers.slice(); // Return a copy of the array
  }

  addEngineer(engineer: Engineer): void {
    this.engineers.push(engineer);
    // Add logic to update engineers list
  }

  // Additional methods for editing and removing engineers can be added here
}
