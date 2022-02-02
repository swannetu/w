import Service from '@ember/service';
import {dProducts, dPromos} from 'tds/data/datas';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;


}
