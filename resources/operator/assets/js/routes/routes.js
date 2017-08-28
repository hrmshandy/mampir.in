import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from '../components/Dashboard/Views/Overview.vue'
import Bonus from '../components/Dashboard/Views/Bonus.vue'
import Discount from '../components/Dashboard/Views/Discount.vue'
import Edit from '../components/Dashboard/Views/Edit.vue'
import Login from '../pages/Login.vue'
import Review from '../components/Dashboard/Views/Review.vue'

const routes = [
  // {
  //   path: '/',
  //   component: DashboardLayout,
  //   redirect: '/overview'
  // },
  {
    path: '/',
    component: Login,
    redirect: '/login',
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: Overview
      },
      {
        path: 'set-bonus',
        name: 'set-bonus',
        component: Bonus
      },
      {
        path: 'discount',
        name: 'discount',
        component: Discount
      },
      {
        path: 'edit',
        name: 'edit',
        component: Edit
      },
      {
        path: 'review',
        name: 'review',
        component: Review
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
