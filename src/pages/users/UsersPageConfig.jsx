import AllUsersPage from './AllUsersPage';
import AddUserPage from './AddUserPage';

export const UsersPageConfig = {
  routes: [
    {
      path: '/users',
      exact: true,
      component: AllUsersPage,
    },
    {
      path: '/users/:id',
      exact: true,
      component: AddUserPage,
    },
  ],
};
