import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategories';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// creates a category
categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {});

export { categoriesRoutes };
