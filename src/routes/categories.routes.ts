import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// creates a category
categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body; // get the request

  const createCategoryService = new CreateCategoryService(categoriesRepository); // call for services
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();

  return response.status(200).json(all);
});

export { categoriesRoutes };
