import AllCategoriesPage from './AllCategoriesPage';
import AddCategoryPage from './AddCategoryPage';

export const CategoriesPageConfig = {
  routes: [
    {
      path: '/categories',
      exact: true,
      component: AllCategoriesPage,
    },
    {
      path: '/categories/add-category',
      exact: true,
      component: AddCategoryPage,
    },
    {
      path: '/categories/:id',
      exact: true,
      component: AddCategoryPage,
    },
  ],
};
