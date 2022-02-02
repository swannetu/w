import Service from '@ember/service';
import {dProducts, dPromos} from 'tds/data/datas';

export default class ProductServicesService extends Service {
  products = dProducts;
  promos = dPromos;

  get activeServices() {
    return dProducts.filterBy('active', true);
  }

  get countActive() {
    return this.activeServices.length;
  }

  get sumActive() {
    let call = (total, product) => total + product;
    return this.activeServices.reduc(call, 0);
  }
}
