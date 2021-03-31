import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}
// class with only one resposability
class CreateCategoryService {
  // dependency inversion
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists'); // exeption
    }

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}
export { CreateCategoryService };
