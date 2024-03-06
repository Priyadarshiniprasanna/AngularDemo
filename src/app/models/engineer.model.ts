import {Role} from "./role.model";
export interface Engineer {
  id: number;
  name: string;
  address: string;
  roles: Role[];
}
