import { v4 as uuid } from 'uuid';

export default class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    // if it is a new object -> id =null
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Category };
