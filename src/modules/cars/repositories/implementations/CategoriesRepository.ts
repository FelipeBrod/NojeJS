import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    console.log(`Category: ${category.name} created`);
    console.log(`Description: ${category.description} created`);

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = this.repository.find();
    console.log('returning list');
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // retunrs a Category object
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export { CategoriesRepository };
