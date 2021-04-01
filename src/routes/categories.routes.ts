import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategories';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();
// const categoriesRepository = new CategoriesRepository();

// creates a category
categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
