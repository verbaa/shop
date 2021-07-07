import { HomePage } from './pages/HomePage';
import { featureConf } from "./config";
import {ProductsPage} from "./pages/ProductsPage";
import {ProductPage} from "./pages/ProductPage";
import {OrderPage} from "./pages/OrderPage";
import {ShippingPayment} from "./pages/ShippingPaymentPage";
import {AboutPage} from "./pages/AboutPage";
import {CartPgae} from "./pages/CartPage";




export const routes = [
  {
    key: `${featureConf}/home`,
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    key: `${featureConf}/catalog`,
    path: '/catalog',
    component: ProductsPage,
    exact: true,
  },
  {
    key: `${featureConf}/product`,
    path: '/products/:id',
    component: ProductPage,
    exact: true,
  }, {
    key: `${featureConf}/shipping-payment`,
    path: 'shipping-payment',
    component: ShippingPayment,
    exact: true,
  }, {
    key: `${featureConf}/about`,
    path: '/about',
    component: AboutPage,
    exact: true,
  }, {
    key: `${featureConf}/cart`,
    path: '/cart',
    component: CartPgae,
    exact: true,
  },
  // {
  //   key: `${featureConf}/order`,
  //   path: '/order',
  //   component: OrderPage,
  //   exact: true,
  // },
];
