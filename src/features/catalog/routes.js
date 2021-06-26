import { HomePage } from './pages/HomePage';
import { featureConf } from "./config";
import {ProductsPage} from "./pages/ProductsPage";
import {ProductPage} from "./pages/ProductPage";
import {OrderPage} from "./pages/OrderPage";




export const routes = [
  {
    key: `${featureConf}/home`,
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    key: `${featureConf}/products`,
    path: '/products',
    component: ProductsPage,
    exact: true,
  },
  {
    key: `${featureConf}/product`,
    path: '/products/:id',
    component: ProductPage,
    exact: true,
  },
  {
    key: `${featureConf}/order`,
    path: '/order',
    component: OrderPage,
    exact: true,
  },
];
